import Poster from './Poster';

export default {
  title: 'components/Poster',
  component: Poster,
};

const Template = args => <Poster {...args} />;

export const Default = Template.bind({});
Default.args = {};
