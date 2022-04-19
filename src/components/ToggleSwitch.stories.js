import ToggleSwitch from './ToggleSwitch';

export default {
  title: 'components/ToggleSwitch',
  component: ToggleSwitch,
  argTypes: { onChange: 'onChange' },
};

const Template = args => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};
