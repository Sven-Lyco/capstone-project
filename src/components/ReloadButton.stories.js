import ReloadButton from './ReloadButton';

export default {
  title: 'components/Buttons/ReloadButton',
  component: ReloadButton,
  argTypes: { onClick: 'onClick' },
};

const Template = args => <ReloadButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
