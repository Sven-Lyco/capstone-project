import LoadingSpinner from './LoadingSpinner';

export default {
  title: 'components/LoadingSpinner',
  component: LoadingSpinner,
};

const Template = args => <LoadingSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {};
