import SearchResultCard from './SearchResultCard';

export default {
  title: 'components/SearchResultCard',
  component: SearchResultCard,
};

const Template = args => <SearchResultCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
