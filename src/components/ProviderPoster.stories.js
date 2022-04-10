import ProviderPoster from './ProviderPoster';

export default {
  title: 'components/ProviderPoster',
  component: ProviderPoster,
};

const Template = args => <ProviderPoster {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: require('../assets/images/provider.png'),
  alt: 'ProviderPoster',
};
