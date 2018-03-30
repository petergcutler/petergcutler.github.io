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
    url: 'uw-secure-storage',
    display: 'Secure Storage for Tent Cities',
    imageCredit: {
      artist: 'Kristian Hagelin',
      artistSite: 'https://www.flickr.com/photos/64346264@N08/',
      source: 'https://www.flickr.com/'
    }
  },
  {
    id: 2,
    url: 'uw-oculus-onboarding',
    display: 'Oculus Rift: Onboarding in a 3d Environment'
    // self-generated image
  },
  {
    id: 3,
    url: 'uw-complex-systems',
    display: 'Red Cross (RCRC): Managing Complex Systems',
    imageCredit: {
      artist: 'Babak Fakhamzadeh',
      artistSite: 'https://www.flickr.com/photos/mastababa/',
      source: 'https://www.flickr.com/'
    }
  },
  {
    id: 4,
    url: 'uw-yarn',
    display: 'Testing the Yarn App: Holistic Storytelling',
    imageCredit: {
      artist: 'Shubhi Patil',
      artistSite: 'https://www.flickr.com/photos/126584658@N03/',
      source: 'https://www.flickr.com/'
    }
  },
  {
    id: 5,
    url: 'crowdskout-data-viz',
    display: 'Crowdskout: Simplifying Data Visualization',
    imageCredit: {
      artist: 'Marcin Ignac',
      artistSite: 'https://www.flickr.com/photos/marcinignac/',
      source: 'https://www.flickr.com/'
    }
  },
  {
    id: 6,
    url: 'crowdskout-datetime',
    display: 'Crowdskout: Revamping Date & Time Selections',
    imageCredit: {
      artist: 'Ben Jenkins',
      artistSite: 'https://www.flickr.com/photos/129547099@N04/',
      source: 'https://www.flickr.com/'
    }
  },
  {
    id: 7,
    url: 'crowdskout-segmenting',
    display: 'Crowdskout: Segmenting Audiences Effectively',
    imageCredit: {
      artist: 'Brent',
      artistSite: 'https://www.flickr.com/photos/39449369@N03/',
      source: 'https://www.flickr.com/'
    }
  },
  {
    id: 8,
    url: 'crowdskout-form-editor',
    display: 'Crowdskout: Complex Form and Survey Editor',
    imageCredit: {
      artist: 'Ming-Lun Hsieh',
      artistSite: 'https://www.flickr.com/photos/minglun_hsieh/',
      source: 'https://www.flickr.com/'
    }
  },
  {
    id: 9,
    url: 'vox-global-brand-redesign',
    display: 'VOX Global: Brand and Website Redesign'
  },
  {
    id: 10,
    url: 'vox-global-motion-design',
    display: 'VOX Global: Motion Design for Lumina Foundation and AT&T'
  },
  {
    id: 11,
    url: 'vox-global-att-csr',
    display: 'VOX Global: Communicating Sustainability Stories for AT&T'
  }
];
