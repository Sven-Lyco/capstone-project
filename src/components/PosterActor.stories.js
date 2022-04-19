import PosterActor from './PosterActor';

export default {
  title: 'components/Poster/PosterActor',
  component: PosterActor,
};

const Template = args => <PosterActor {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: 'John Doe',
  src: require('../assets/images/profile.png'),
};
