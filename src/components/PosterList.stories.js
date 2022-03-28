import PosterList from './PosterList';

export default {
  title: 'components/PosterList',
  component: PosterList,
};

const Template = args => <PosterList {...args} />;

export const Default = Template.bind({});
Default.args = {
  listName: 'Listen Name',

  list: [
    { id: 1, name: 'Title 1' },
    { id: 2, name: 'Title 2' },
    { id: 3, name: 'Title 3' },
    { id: 4, name: 'Title 4' },
    { id: 5, name: 'Title 5' },
    { id: 6, name: 'Title 6' },
    { id: 7, name: 'Title 7' },
    { id: 8, name: 'Title 8' },
    { id: 9, name: 'Title 9' },
    { id: 10, name: 'Title 10' },
    { id: 11, name: 'Title 11' },
    { id: 12, name: 'Title 12' },
    { id: 13, name: 'Title 13' },
    { id: 14, name: 'Title 14' },
    { id: 15, name: 'Title 15' },
    { id: 16, name: 'Title 16' },
    { id: 17, name: 'Title 17' },
    { id: 18, name: 'Title 18' },
    { id: 19, name: 'Title 19' },
    { id: 20, name: 'Title 20' },
  ],
};
