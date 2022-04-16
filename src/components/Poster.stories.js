import Poster from './Poster';

export default {
  title: 'components/Poster/Poster',
  component: Poster,
};

const Template = args => <Poster {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: 'Poster',
  src: require('../assets/images/poster.png'),
};
