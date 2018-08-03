import { Work } from './work-schema';

/**
 * Reference object for Work
 *
 * @property  {number} id - the work id
 * @property  {string} url - the url, describes:
 *   the route and url for the browser
 *   the thumbnail's image url in assets (.png)
 * @property  {string} display - the title
 * @property {strong} description - the description
 * @property {array} tags - the tags for type of work
 * @property {object} imageCredit - properties to attribute the thumbnail image.
 *   @property {string} imageCredit.artist - the artist's name
 *   @property {string} imageCredit.artistSite - the artist's site
 *   @property {string} imageCredit.source - the site of discovery
 */

export const WORKS: Work[] = [
  {
    id: 1,
    url: 'uw-secure-storage',
    display: 'Open Source Storage Design for Shelters',
    description: 'Designing a user-centered solution to help homeless Seattle residents store their possessions securely and sustainably',
    client: 'University of Washington',
    team: [
      'Galen Lieberworth',
      'Omari Stringer',
      'Anthony Ruh'
    ],
    tags: [
      'UX Research',
      'Information Architecture',
      'Semi-Structured Interviews',
      'UX Design',
      'Personas',
      'Wireframing',
      'Prototyping'
    ],
    imageCredit: {
      artist: 'Kristian Hagelin',
      artistSite: 'https://www.flickr.com/photos/64346264@N08/',
      source: 'https://www.flickr.com/'
    }
  },
  {
    id: 2,
    url: 'uw-oculus-onboarding',
    display: 'On-boarding with the Oculus Platform',
    description: 'Usability testing to evaluate first-time user experiences with Oculus Touch and motion-controlled software',
    client: 'University of Washington',
    team: [
      'Kartika Rathee',
      'Joel Sytsma',
      'Tanya Wang'
    ],
    tags: [
      'UX Research',
      'Usability Testing',
      'Qualitative Research',
      'Quantitative Research'
    ]
    // self-generated image
  },
  {
    id: 3,
    url: 'vox-global-motion-design',
    display: 'Motion Design and Animation',
    description: 'Running a video and animation practice for VOX Global',
    client: 'VOX Global',
    tags: [
      'Creative Strategy',
      'Client Management',
      'Visual Design',
      'Storyboarding',
      'Animation'
    ]
  },
  {
    id: 4,
    url: 'uw-complex-systems',
    display: 'Collaborative Research with the IFRC',
    description: 'Researching a complex humanitarian system and planning a human-centered intervention to improve vulnerability assessments',
    client: 'International Federation of Red Cross and Red Crescent Societies',
    team: [
      'Alik Brundett',
      'Elizabeth Quepons',
      'Pashmeena Chawro'
    ],
    tags: [
      'UX Research',
      'Literature Review',
      'Semi-Structured Interviews'
    ],
    imageCredit: {
      artist: 'Babak Fakhamzadeh',
      artistSite: 'https://www.flickr.com/photos/mastababa/',
      source: 'https://www.flickr.com/'
    }
  },
  {
    id: 5,
    url: 'uw-yarn',
    display: 'Structured Supports for Storytelling',
    description: 'Researching how narrative can enhance data-driven stories of accomplishment to improve social feedback',
    client: 'University of Washington',
    tags: [
      'UX Research',
      'Semi-Structured Interviews',
      'Surveying',
      'Qualitative Research'
    ],
    imageCredit: {
      artist: 'Shubhi Patil',
      artistSite: 'https://www.flickr.com/photos/126584658@N03/',
      source: 'https://www.flickr.com/'
    }
  },
  {
    id: 6,
    url: 'crowdskout-segmenting',
    display: 'Segmenting Audiences Effectively',
    description: 'Overhauling the interface for audience segmentation in Crowdskout',
    client: 'Crowdskout',
    tags: [
      'Front-End Engineering',
      'JavaScript',
      'AngularJS',
      'Prototyping'
    ],
    imageCredit: {
      artist: 'Brent',
      artistSite: 'https://www.flickr.com/photos/39449369@N03/',
      source: 'https://www.flickr.com/'
    }
  },
  {
    id: 7,
    url: 'crowdskout-data-viz',
    display: 'Simplifying Data Visualization',
    description: 'Developing an intuitive system for data visualization in Crowdskout',
    client: 'Crowdskout',
    tags: [
      'Front-End Engineering',
      'JavaScript',
      'AngularJS',
      'D3.js',
      'Prototyping'
    ],
    imageCredit: {
      artist: 'Marcin Ignac',
      artistSite: 'https://www.flickr.com/photos/marcinignac/',
      source: 'https://www.flickr.com/'
    }
  },
  {
    id: 8,
    url: 'crowdskout-datetime',
    display: 'Revamping Date & Time Selections',
    description: 'Developing a modular way to manipulate date & datetime selections in Crowdskout',
    client: 'Crowdskout',
    tags: [
      'Front-End Engineering',
      'JavaScript',
      'AngularJS',
      'Moment.js',
      'Prototyping'
    ],
    imageCredit: {
      artist: 'Ben Jenkins',
      artistSite: 'https://www.flickr.com/photos/129547099@N04/',
      source: 'https://www.flickr.com/'
    }
  },
  {
    id: 9,
    url: 'crowdskout-form-editor',
    display: 'A System for Interactive Forms',
    description: 'Enabling users to create, manage, and interpret data from surveys & forms using a variety of designs and conditions',
    client: 'Crowdskout',
    tags: [
      'Front-End Engineering',
      'JavaScript',
      'AngularJS',
      'Prototyping'
    ],
    imageCredit: {
      artist: 'Ming-Lun Hsieh',
      artistSite: 'https://www.flickr.com/photos/minglun_hsieh/',
      source: 'https://www.flickr.com/'
    }
  },
  {
    id: 10,
    url: 'vox-global-brand-redesign',
    display: 'Internal Rebrand for an Ad Agency',
    description: 'Working with internal stakeholders to research and redesign VOX Global\'s brand and web presence',
    client: 'VOX Global',
    tags: [
      'Semi-Structured Interviews',
      'Language & Tone',
      'UX Design',
      'Creative Strategy',
      'Visual Design'
    ],
  },
  {
    id: 11,
    url: 'vox-global-att-csr',
    display: 'Redesigning AT&T CSR\'s Brand & Website',
    description: 'Revamping the way AT&T presents their brand and uses storytelling to share their corporate & social responsibility campaigns',
    client: 'VOX Global',
    tags: [
      'Creative Strategy',
      'Client Management',
      'UX Design',
      'Visual Design'
    ],
  }
];
