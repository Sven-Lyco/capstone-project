import RatingCircle from './RatingCircle';

export default {
  title: 'components/RatingCircle',
  component: RatingCircle,
};

const Template = args => <RatingCircle {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: { default: 'light' },
};
Default.args = {
  rating: 6,
};
