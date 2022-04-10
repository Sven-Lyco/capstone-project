import ProviderList from './ProviderList';

export default {
  title: 'components/ProviderList',
  component: ProviderList,
};

const Template = args => <ProviderList {...args} />;

export const Default = Template.bind({});
Default.args = {
  listName: 'Listen Name',

  providerList: [
    { id: 1, name: 'Title 1' },
    { id: 2, name: 'Title 2' },
    { id: 3, name: 'Title 3' },
    { id: 4, name: 'Title 4' },
    { id: 5, name: 'Title 5' },
  ],
};
