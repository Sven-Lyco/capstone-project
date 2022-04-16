import CastList from './CastList';

export default {
  title: 'components/Lists/CastList',
  component: CastList,
};

const Template = args => <CastList {...args} />;

export const Default = Template.bind({});
Default.args = {
  listName: 'Main actors',

  castList: [
    { id: 1, name: 'Title 1', character: 'Character 1' },
    { id: 2, name: 'Title 2', character: 'Character 2' },
    { id: 3, name: 'Title 3', character: 'Character 3' },
    { id: 4, name: 'Title 4', character: 'Character 4' },
    { id: 5, name: 'Title 5', character: 'Character 5' },
    { id: 6, name: 'Title 6', character: 'Character 6' },
    { id: 7, name: 'Title 7', character: 'Character 7' },
    { id: 8, name: 'Title 8', character: 'Character 8' },
    { id: 9, name: 'Title 9', character: 'Character 9' },
    { id: 10, name: 'Title 10', character: 'Character 10' },
  ],
};
