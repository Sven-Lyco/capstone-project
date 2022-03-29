import Header from './Header';

export default {
  title: 'components/Header',
  component: Header,
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: require('../assets/images/header/suche.svg'),
  alt: 'suche',
  title: 'Suche',
};
