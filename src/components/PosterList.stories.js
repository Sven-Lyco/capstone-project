import PosterList from './PosterList';

export default {
  title: 'components/Lists/PosterList',
  component: PosterList,
};

const Template = args => <PosterList {...args} />;

export const Default = Template.bind({});
Default.args = {
  listName: 'List name',

  list: [
    { id: 1, name: 'Title 1', alt: 'Title 1' },
    { id: 2, name: 'Title 2', alt: 'Title 2' },
    { id: 3, name: 'Title 3', alt: 'Title 3' },
    { id: 4, name: 'Title 4', alt: 'Title 4' },
    { id: 5, name: 'Title 5', alt: 'Title 5' },
    { id: 6, name: 'Title 6', alt: 'Title 6' },
    { id: 7, name: 'Title 7', alt: 'Title 7' },
    { id: 8, name: 'Title 8', alt: 'Title 8' },
    { id: 9, name: 'Title 9', alt: 'Title 9' },
    { id: 10, title: 'Title 10', alt: 'Title 10' },
    { id: 11, title: 'Title 11', alt: 'Title 11' },
    { id: 12, title: 'Title 12', alt: 'Title 12' },
    { id: 13, title: 'Title 13', alt: 'Title 13' },
    { id: 14, title: 'Title 14', alt: 'Title 14' },
    { id: 15, title: 'Title 15', alt: 'Title 15' },
    { id: 16, title: 'Title 16', alt: 'Title 16' },
    { id: 17, title: 'Title 17', alt: 'Title 17' },
    { id: 18, title: 'Title 18', alt: 'Title 18' },
    { id: 19, title: 'Title 19', alt: 'Title 19' },
    { id: 20, title: 'Title 20', alt: 'Title 20' },
  ],
};
