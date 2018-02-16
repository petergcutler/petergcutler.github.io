import { Work } from './work-list';

/**
 * Reference object for Work
 *
 * @property  {number} id - the work id
 * @property  {string} url - the url, describes:
 *   the route and url for the browser
 *   the thumbnail's image url in assets (.png)
 *   the html template in the assets (.html)
 * @property  {string} display - the display title
 */

export const WORKS: Work[] = [
  {
    id: 1,
    url: 'uw-secure-storage-in-shelters',
    display: 'Secure Storage for Tent Cities',
    img: ''
  },
  {
    id: 2,
    url: 'uw-oculus-rift-onboarding-in-3d',
    display: 'Oculus Rift - Onboarding in a 3d Environment',
    img: ''
  },
  {
    id: 3,
    url: 'uw-rcrc-complex-systems-and-vca',
    display: 'Red Cross and the Design of Complex Systems',
    img: ''
  },
  {
    id: 4,
    url: 'uw-research-with-yarn',
    display: 'Research with Yarn: Holistic Storytelling',
    img: ''
  },
  {
    id: 5,
    url: 'crowdskout-data-visualization-systems',
    display: 'Crowdskout: Simplifying Complex Data Visualization',
    img: ''
  },
  {
    id: 6,
    url: 'crowdskout-date-and-time',
    display: 'Crowdskout: Overhauling Date & Time Selections',
    img: ''
  },
  {
    id: 7,
    url: 'crowdskout-segmenting-audiences',
    display: 'Crowdskout: Segmenting Audiences Effectively',
    img: ''
  },
  {
    id: 8,
    url: 'crowdskout-complex-form-editor',
    display: 'Crowdskout: Empowering Users to Create Complex Forms',
    img: ''
  },
  {
    id: 9,
    url: 'vox-global-brand-redesign',
    display: 'VOX Global: Brand and Website Redesign',
    img: ''
  },
  {
    id: 10,
    url: 'vox-global-motion-design',
    display: 'VOX Global: Motion Design for Lumina Foundation and AT&T',
    img: ''
  },
  {
    id: 11,
    url: 'vox-global-communicating-sustainability-for-att',
    display: 'VOX Global: Communicating Sustainability Stories for AT&T',
    img: ''
  }
];
