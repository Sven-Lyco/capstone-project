import PosterActor from './PosterActor';

export default {
  title: 'components/PosterActor',
  component: PosterActor,
};

const Template = args => <PosterActor {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: require('../assets/images/profile.png'),
  alt: 'Profilename',
};
