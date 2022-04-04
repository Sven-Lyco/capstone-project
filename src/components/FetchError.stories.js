import FetchError from './FetchError';

export default {
  title: 'components/FetchError',
  component: FetchError,
};

const Template = args => <FetchError {...args} />;

export const Default = Template.bind({});
Default.args = {};
