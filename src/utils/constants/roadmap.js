import {
  FcBinoculars,
  FcCommandLine,
  FcParallelTasks,
  FcServices,
  FcBrokenLink,
  FcWorkflow,
  FcCircuit,
  FcBiotech
} from 'react-icons/fc';

export const roadmap = [
  {
    icon: <FcParallelTasks className="card-icon" />,
    title: 'Web Development',
    link: 'web',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam elit tortor, facilisis sed sapien sed, ultrices pellentesque erat.',
    subItems: {
      title: 'Front-End Development',
      subTitles: [
        {
          title: 'Html Foundations',
          checked: false
        },
        {
          title: 'Css Foundations',
          checked: false
        },
        {
          title: 'Flexbox',
          checked: false
        },
        {
          title: 'JavaScript Basics',
          checked: false
        },
        {
          title: 'Async JS',
          checked: false
        },
        {
          title: 'Git',
          checked: false
        },
        {
          title: 'Responsive Design',
          checked: false
        }
      ]
    },
    index: 1
  },
  {
    icon: <FcCommandLine className="card-icon" />,
    title: 'Cyber Security',
    link: 'cyberSecurity',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam elit tortor, facilisis sed sapien sed, ultrices pellentesque erat.',
    index: 2
  },
  {
    icon: <FcBinoculars className="card-icon" />,
    title: 'Game Development',
    link: 'game',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam elit tortor, facilisis sed sapien sed, ultrices pellentesque erat.',
    index: 3
  },
  {
    icon: <FcServices className="card-icon" />,
    title: 'Data Science',
    link: 'data',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam elit tortor, facilisis sed sapien sed, ultrices pellentesque erat.',
    index: 4
  },
  {
    icon: <FcBrokenLink className="card-icon" />,
    title: 'Mobile Development',
    link: 'mobile',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam elit tortor, facilisis sed sapien sed, ultrices pellentesque erat.',
    index: 5
  },
  {
    icon: <FcCircuit className="card-icon" />,
    title: 'Artificial Intelligence',
    link: 'artificial',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam elit tortor, facilisis sed sapien sed, ultrices pellentesque erat.',
    index: 6
  },
  {
    icon: <FcWorkflow className="card-icon" />,
    title: 'Web Development',
    link: 'web',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam elit tortor, facilisis sed sapien sed, ultrices pellentesque erat.',
    index: 7
  },
  {
    icon: <FcBiotech className="card-icon" />,
    title: 'Web Development',
    link: 'web',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nam elit tortor, facilisis sed sapien sed, ultrices pellentesque erat.',
    index: 8
  }
];
