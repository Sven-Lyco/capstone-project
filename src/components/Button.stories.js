import Button from './Button';

export default {
  title: 'buttons/Button',
  component: Button,
  argTypes: { onClick: 'onClick' },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'click me',
  buttonType: 'normal',
};

export const NeueFische = Template.bind({});
NeueFische.args = {
  text: 'click me',
  buttonType: 'neueFische',
};

export const GreenButton = Template.bind({});
GreenButton.args = {
  text: 'click me',
  buttonType: 'green',
};

export const RedButton = Template.bind({});
RedButton.args = {
  text: 'click me',
  buttonType: 'red',
};
