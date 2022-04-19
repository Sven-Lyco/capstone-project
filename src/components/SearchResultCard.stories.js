import SearchResultCard from './SearchResultCard';

export default {
  title: 'components/Cards/SearchResultCard',
  component: SearchResultCard,
};

const Template = args => <SearchResultCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 123,
  name: '',
  title: '',
  releaseDate: '',
  firstAirDate: '',
  mediaType: '',
};

export const Series = Template.bind({});
Series.args = {
  id: 123,
  name: 'Suits',
  firstAirDate: '2011',
  mediaType: 'series',
};

export const Movie = Template.bind({});
Movie.args = {
  id: 123,
  title: 'Sonic the Hedgehog 2',
  releaseDate: '2022',
  mediaType: 'movie',
};
