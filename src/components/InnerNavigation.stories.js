import InnerNavigation from './InnerNavigation';

export default {
  title: 'components/InnerNavigation',
  component: InnerNavigation,
};

const Template = args => <InnerNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {};