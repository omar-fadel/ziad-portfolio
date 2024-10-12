import ProjectTile, { ProjectTileProps } from '../ProjectTile';

type availableProjects =
  | 'swd'
  | 'spiderman'
  | 'dreamForest'
  | 'sneakers'
  | 'jkk'
  | 'heavenly'
  | 'transmition'
  | 'high';

const projectsProps: Record<availableProjects, ProjectTileProps> = {
  swd: {
    background: 'swd',
    link: '/swd',
    project: 'client',
    title: [
      <h2 key="0">Saudi</h2>,
      <h2 className="text-beige" key="1">
        WOMEN&apos;S
      </h2>,
      <h2 className="text-beige" key="2">
        Day
      </h2>,
    ],
  },
  dreamForest: {
    background: 'dreamForest',
    link: '/df',
    project: 'client',
    title: [
      <h2 key="d-0">DREAM</h2>,
      <h2 key="d-1" className="text-green-700">
        FOREST
      </h2>,
    ],
  },
  high: {
    background: 'high',
    link: '/high',
    project: 'personal',
    title: [
      <h2 key="h-0">
        <span className="text-black">H</span>
        <span className="text-pink-900">I</span>
        <span className="text-pink-700">G</span>
        <span className="text-pink-500">H</span>
        <span className="text-pink-500">.</span>
      </h2>,
    ],
  },
  jkk: {
    background: 'jkk',
    link: '/jkk',
    project: 'client',
    title: [
      <h2 key="j-0" className="text-[6rem] text-pink-600">
        JKK
      </h2>,
      <h2 className="text-[6rem]" key="j-1">
        FAN
      </h2>,
      <h2 className="text-[6rem]" key="j-2">
        ANIMATION
      </h2>,
    ],
  },
  sneakers: {
    background: 'sneakers',
    link: '/sneakers',
    project: 'personal',
    title: [
      <h2 className="text-orange-600" key="s-0">
        Sneakers
      </h2>,
    ],
  },
  spiderman: {
    background: 'spiderman',
    link: '/spiderman',
    project: 'client',
    title: [
      <h2 key="sp-0">Spider</h2>,
      <h2 key="sp-2" className="text-pink-700">
        MAN
      </h2>,
    ],
  },
  heavenly: {
    background: 'heavenly',
    link: '/heavenly',
    project: 'personal',
    title: [
      <h2 key="he-0" className="text-beige">
        Heavenly
      </h2>,
    ],
  },
  transmition: {
    background: 'transmition',
    link: '/transmition',
    project: 'client',
    title: [
      <h2 key="t-0" className="text-[4rem] text-black">
        Transmition
      </h2>,
    ],
  },
};

export default projectsProps;
