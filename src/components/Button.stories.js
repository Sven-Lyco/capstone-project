import Button from './Button';

export default {
  title: 'components/Buttons/Button',
  component: Button,
  argTypes: { onClick: 'onClick' },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'click me',
  buttonType: 'normal',
};

export const NeueFische = Template.bind({});
NeueFische.args = {
  children: 'click me',
  buttonType: 'neueFische',
};

export const GreenButton = Template.bind({});
GreenButton.args = {
  children: 'click me',
  buttonType: 'green',
};

export const RedButton = Template.bind({});
RedButton.args = {
  children: 'click me',
  buttonType: 'red',
};
