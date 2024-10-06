import React from 'react';
import ProjectDisplay from '../Components/ProjectDisplay';
const projects = [
  {
    title: 'ICP-Portfolio',
    videoUrl: 'https://www.youtube.com/embed/PVQC_7il0O0?si=gzDgTiGuz_Dhrd1N',
    githubUrl: 'https://github.com/sam-the-tutor/Mega-Submission',
    description: 'An application that allows you to manage and track different crypto tokens across different ICP principal addresses on one go',
  },
  {
    title: 'PW Manager',
    videoUrl: 'https://www.youtube.com/embed/8uPwO5-6bCo?si=ejs-n6PWlu8NmK2M',
    githubUrl: '',
    description: 'A cross-chain wallet built on ICP that supports Bitcoin, Ethereum and all ICP tokens',
  },
  {
    title: 'Staking Dapp',
    videoUrl: '',
    githubUrl: 'https://github.com/sam-the-tutor/stakingDapp',
    description: 'Allows you to stake STT tokens and earn rewards for up to 8% APR',
  },
  {
    title: 'ICRC-Token-Launcher',
    videoUrl: '',
    githubUrl: 'https://github.com/sam-thetutor/ICRC-Token-Launcher',
    description: 'Launch your own ICRC tokens on the ICP network with a few clicks',
  },
  {
    title: 'miSAFE',
    videoUrl: 'https://youtube.com/embed/8MnEJsAawdI?si=4L1vzzMEQiboT8u8',
    githubUrl: 'https://github.com/sam-thetutor/ICRC-Token-Launcher',
    description: 'A saving app on the CELO network that allows small business owners and individuals to start group and personal saving camapaigns towards their goals',
  },
];

const App = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <ProjectDisplay projects={projects} />
    </div>
  );
};

export default App;


