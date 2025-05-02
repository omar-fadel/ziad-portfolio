export const getValuesFromBody = (body: Record<string, unknown>) => {
  const { name, email, company, message, budget } = body;
  if (!name || !email || !company || !message)
    throw new Error('Missing Params');
  return [name, email, company, message, budget];
};
