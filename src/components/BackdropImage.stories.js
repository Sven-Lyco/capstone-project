import BackdropImage from './BackdropImage';

export default {
  title: 'components/BackdropImage',
  component: BackdropImage,
};

const Template = args => <BackdropImage {...args} />;

export const Default = Template.bind({});
Default.args = { backdropPath: '/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg' };
