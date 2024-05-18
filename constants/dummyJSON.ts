export interface Slide {
  id: string;
  image: any;
  title: string;
  subTitle: string;
}

export const slides: Slide[] = [
  {
    id: '1',
    image: require('../assets/images/onboard_image1.png'),
    title: 'Plan your travel',
    subTitle: 'Choose your destination, plan your trip. Pick the best place for your holiday.',
  },
  {
    id: '2',
    image: require('../assets/images/onboard_image2.png'),
    title: 'Never miss an airbnb deal',
    subTitle: 'Discover, compare, book hotels and airbnb deals at your convenience.',
  },
  {
    id: '3',
    image: require('../assets/images/onboard_image3.png'),
    title: 'Never miss a shopping deal',
    subTitle: 'Enjoy the best travel with our exquisite shopping experience',
  },
];