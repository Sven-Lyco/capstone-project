import ReloadButton from './ReloadButton';

export default {
  title: 'buttons/ReloadButton',
  component: ReloadButton,
  argTypes: { onClick: 'onClick' },
};

const Template = args => <ReloadButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
