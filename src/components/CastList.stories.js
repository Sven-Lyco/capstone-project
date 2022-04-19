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
    { id: 1, name: 'Name 1', character: 'Character 1' },
    { id: 2, name: 'Name 2', character: 'Character 2' },
    { id: 3, name: 'Name 3', character: 'Character 3' },
    { id: 4, name: 'Name 4', character: 'Character 4' },
    { id: 5, name: 'Name 5', character: 'Character 5' },
    { id: 6, name: 'Name 6', character: 'Character 6' },
    { id: 7, name: 'Name 7', character: 'Character 7' },
    { id: 8, name: 'Name 8', character: 'Character 8' },
    { id: 9, name: 'Name 9', character: 'Character 9' },
    { id: 10, name: 'Name 10', character: 'Character 10' },
  ],
};
