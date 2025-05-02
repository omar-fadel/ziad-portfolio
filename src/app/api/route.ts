import { google } from 'googleapis';

import { getValuesFromBody } from './googleApiRouteHandler';

export async function POST(request: Request) {
  try {
    const client = new google.auth.JWT(
      process.env.CLIENT_EMAIL,
      undefined,
      process.env.PRIVATE_KEY,
      ['https://www.googleapis.com/auth/spreadsheets'],
    );
    const gsapi = google.sheets({ version: 'v4', auth: client });
    const sentBody = await request.json();
    const values = getValuesFromBody(sentBody);
    console.log(values);
    const body = {
      range: 'Sheet1!A:E',
      majorDimension: 'ROWS',
      values: [values],
    };
    const data = await gsapi.spreadsheets.values.append(
      {
        spreadsheetId: '1G1S0hOhhwtBZBsraLGQXClWUZcBjhxTU4EyCGPm1Wbo',
        range: 'Sheet1!A:E',
        valueInputOption: 'RAW',
      },
      { body: JSON.stringify(body) },
    );
    return Response.json(data);
  } catch (e: unknown) {
    console.log(e);
    return Response.json((e as Error).message, {
      status: 500,
    });
  }
}
