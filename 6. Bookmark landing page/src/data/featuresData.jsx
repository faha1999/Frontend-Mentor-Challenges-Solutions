import bookmarkImg from '../assets/images/illustration-features-tab-1.svg';
import searchImg from '../assets/images/illustration-features-tab-2.svg';
import shareImg from '../assets/images/illustration-features-tab-3.svg';

export const featuresData = [
  {
    img: bookmarkImg,
    key: 'bookmark',
    title: 'Bookmark in one click',
    details:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    button: 'More Info',
  },
  {
    img: searchImg,
    key: 'search',
    title: 'Intelligent search',
    details:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    button: 'More Info',
  },
  {
    img: shareImg,
    key: 'share',
    title: 'Share your bookmarks',
    details:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    button: 'More Info',
  },
];
