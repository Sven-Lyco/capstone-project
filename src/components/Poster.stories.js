import Poster from './Poster';
import defaultPoster from '../assets/images/poster.png';

export default {
  title: 'components/Poster/Poster',
  component: Poster,
};

const Template = args => <Poster {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: 'Poster',
  isWatched: true,
  src: defaultPoster,
};
