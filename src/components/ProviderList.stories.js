import ProviderList from './ProviderList';

export default {
  title: 'components/Lists/ProviderList',
  component: ProviderList,
};

const Template = args => <ProviderList {...args} />;

export const Default = Template.bind({});
Default.args = {
  providerList: {
    flatrate: [
      { provider_id: 1, provider_name: 'Netflix' },
      { provider_id: 2, provider_name: 'Amazon Prime' },
      { provider_id: 3, provider_name: 'Sky' },
      { provider_id: 4, provider_name: 'Disney+' },
    ],
  },
};
