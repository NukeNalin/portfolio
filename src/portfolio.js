import emoji from 'react-easy-emoji';

import digivalet from './assets/img/icons/common/digivalet.png'
import enginnerbabu from './assets/img/icons/common/enginnerb.png'
import codebetter from './assets/img/icons/common/codebetter.png'
import resume from './assets/img/icons/common/resume.pdf'

import advantal from './assets/img/icons/common/advantallogo.png'

export const greetings = {
    "name": "Nalin Porwal",
    "title": "Hi all, I'm Nalin",
    "description": "I am Nalin Porwal, a thinker, fun lover, problem solver and a friendly guy.  An established and acknowledged iOS Developer, who loves getting my hands dirty in coding. I create cool iOS Apps and have a work experience of more than 3 years. I love sitting with my shiny Apple all day long to create cool apps for cool folks",
    "resumeLink": "./assets/img/icons/common/resume.pdf"
}

export const openSource = {
  githubUserName: '1hanzla100',
};

export const contact = {
  
}

export const socialLinks = {
    "facebook": "https://www.facebook.com/nalin.porwal.14",
    "instagram": "https://www.instagram.com/nalinporwal/",
    "twitter": "https://twitter.com/NalinPorwal",
    "github": "https://github.com/NukeNalin",
    "linkedin": "https://www.linkedin.com/in/nalin-porwal-811b33169/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY iOS DEVELOPER WHO WANTS TO EXPLORE EVERY THING IN iOS ',
    skills: [
      emoji(
        '⚡ Develop highly interactive iOS applications'
      ),
      emoji('⚡ Passionate for learing new stuffs'),
      emoji(
        '⚡ Integration of third party services '
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'swift',
        fontAwesomeClassname: 'vscode-icons:file-type-swift',
      },
      {
        skillName: 'iOS',
        fontAwesomeClassname: 'logos:ios',
      },
      {
        skillName: 'apple',
        fontAwesomeClassname: 'logos:apple',
      },
      {
        skillName: 'firebase',
        fontAwesomeClassname: 'logos:firebase',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
    ],
}


export const SkillBars = [
    {
      Stack: 'Swift Language', //Insert stack or technology you have experience in
      progressPercentage: '95', //Insert relative proficiency in percentage
    },
    {
      Stack: 'iOS Appliaction Development',
      progressPercentage: '85',
    },
    {
      Stack: 'SwiftUI',
      progressPercentage: '60',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'RGPV University',
      subHeader: 'BACHELOR OF ENGINEERING (COMPUTER SCIENCE)',
      duration: 'September 2016 - September 2020',
    },
    {
      schoolName: 'Garima Vidya Vihar H. S School',
      subHeader: '12TH FROM CBSE BOARD',
      duration: '2015- 2016',
    },
    {
      schoolName: 'Garima Vidya Vihar H. S School',
      subHeader: '10TH FROM CBSE BOARD',
      duration: '2013- 2014',
    },
]

export const experience = [
  {
    role: 'iOS Developer',
    company: 'DigiValet Inc',
    companylogo: digivalet,
    date: 'AUG 2020 – Present',
    descBullets: [
      'Design top notch software solutions for LUXURY HOTELS',
      'Developing and managing CasaDigi and Digivalet iOS apps',
      "Worked on SWIFT PACKAGES, SWIFTUI, COMBINE",
      "Working on iPad based guest room solution for luxury hotel",
    ],
  },
  {
    role: 'iOS Developer',
    company: 'Advantal Tech. Pvt Ltd',
    companylogo: advantal,
    date: 'JAN 2020 - JUL 2020',
    descBullets: [
      'Design top-notch software solutions for Apple devices',
      'Worked on M6Connect, an app for team collaboration',
      "Working on Organic Cart iOS App that is an e-commerce platform ",
    ],
  },
  {
    role: 'iOS Developer Intern',
    company: 'Engineerbabu',
    companylogo: enginnerbabu,
    date: 'JUN 2019 - SEPT 2019',
    descBullets: [
      'Worked on projects like Wololo, an Urban Mobility App',
      'Worked on Fit Shuffle fitness app for iOS platform.',
      "Code high-performance programs using different frameworks",
      "Worked with Cocoa Service Frameworks, third-party libraries and APIs.",
    ],
  },
  {
    role: 'iOS Developer Intern',
    company: 'CodeBetter',
    companylogo: codebetter,
    date: 'JAN 2018 - SEPT 2018',
    descBullets: [
      'Enhanced Skills for building iOS Applications',
      'Worked on different technologies/ frameworks for iOS Apps',
      "Developed Notes Sharing iOS App named NotesBazaar",
      "Built Hiiga e-Sports Application from scratch and integrated payment gateways, push notifications, etc",
    ],
  },
]

export const projects = [
  {
    name: "DigiValet",
    desc: "The touchscreen genie is a In-Room Solution which using the Digivalet5 In-Room Controller can facilitate the following for you like Lighting Automation, Climate Control : FCU Speed, Temperature, Television, Internet, Billing, Security and many more",
    link: {
      name: "App Store",
      url: "https://apps.apple.com/us/app/digivalet5-dark/id1326833940"
    }
  },
  {
    name: "CasaDigi",
    desc: "CasaDigi provide an innovative guest experience solution - the likes of which have never been seen before. The result spoke for itself: In a world of ethernet cables, analog phones, and bulky desk-side compendiums, Casa Digi delivered the world's first digital guest experience solution at the hands of an iPhone.",
    link: {
      name: "App Store",
      url: "https://apps.apple.com/in/app/casadigi-3-0-for-iphone/id1487132126"
    }
  },
  {
    name: "M6 Connect",
    desc: "Worked on M6Connect, an app for team collaboration. We Can chat with team, assign task, manage team hierarchy and many more  ",
    link: {
      name: "website",
      url: "https://www.m6connect.com"
    }
  },
  {
    name: "Wololo",
    companylogo:  enginnerbabu,
    desc: "Wololo is made with a mission to transform cities and the way people move.",
    link: {
      name: "App Store",
      url: "https://apps.apple.com/us/app/wololo-sustainable-mobility/id1471109754"
    }
  },
  {
    name: "FitShuffle",
    desc: "Fit Shuffle – a dynamic app to meet your fitness needs and create your custom workout list",
    link: {
      name: "App Store",
      url: "https://apps.apple.com/hn/app/fit-shuffle/id779482113?l=en"
    }
  }
]