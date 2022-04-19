import ProviderPoster from './ProviderPoster';

export default {
  title: 'components/Poster/ProviderPoster',
  component: ProviderPoster,
};

const Template = args => <ProviderPoster {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: 'Netflix',
  src: require('../assets/images/provider.png'),
};
