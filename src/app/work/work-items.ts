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
 * @property {object} imageCredit - properties to attribute the thumbnail image.
 *   @property {string} imageCredit.artist - the artist's name
 *   @property {string} imageCredit.artistSite - the artist's site
 *   @property {string} imageCredit.source - the site of discovery
 */

export const WORKS: Work[] = [
  {
    id: 1,
    url: 'uw-secure-storage-in-shelters',
    display: 'Secure Storage for Tent Cities',
    imageCredit: {
      artist: 'Kristian Hagelin',
      artistSite: 'https://www.flickr.com/photos/64346264@N08/',
      source: 'https://www.flickr.com/'
    }
  },
  {
    id: 2,
    url: 'uw-oculus-rift-onboarding-in-3d',
    display: 'Oculus Rift: Onboarding in a 3d Environment',
    imageCredit: {}
  },
  {
    id: 3,
    url: 'uw-rcrc-complex-systems-and-vca',
    display: 'Red Cross (RCRC): Managing Complex Systems',
    imageCredit: {}
  },
  {
    id: 4,
    url: 'uw-research-with-yarn',
    display: 'Testing the Yarn App: Holistic Storytelling',
    imageCredit: {}
  },
  {
    id: 5,
    url: 'crowdskout-data-visualization-systems',
    display: 'Crowdskout: Simplifying Data Visualization',
    imageCredit: {}
  },
  {
    id: 6,
    url: 'crowdskout-date-and-time',
    display: 'Crowdskout: Revamping Date & Time Selections',
    imageCredit: {}
  },
  {
    id: 7,
    url: 'crowdskout-segmenting-audiences',
    display: 'Crowdskout: Segmenting Audiences Effectively',
    imageCredit: {}
  },
  {
    id: 8,
    url: 'crowdskout-complex-form-editor',
    display: 'Crowdskout: Empowering Users to Create Complex Forms',
    imageCredit: {}
  },
  {
    id: 9,
    url: 'vox-global-brand-redesign',
    display: 'VOX Global: Brand and Website Redesign',
    imageCredit: {}
  },
  {
    id: 10,
    url: 'vox-global-motion-design',
    display: 'VOX Global: Motion Design for Lumina Foundation and AT&T',
    imageCredit: {}
  },
  {
    id: 11,
    url: 'vox-global-communicating-sustainability-for-att',
    display: 'VOX Global: Communicating Sustainability Stories for AT&T',
    imageCredit: {}
  }
];
