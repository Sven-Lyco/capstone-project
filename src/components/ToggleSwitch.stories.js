import ToggleSwitch from './ToggleSwitch';

export default {
  title: 'components/ToggleSwitch',
  component: ToggleSwitch,
};

const Template = args => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {};
