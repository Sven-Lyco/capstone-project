import AddButton from './AddButton';

export default {
  title: 'components/Buttons/AddButton',
  component: AddButton,
  argTypes: { onClick: 'onClick' },
};

const Template = args => <AddButton {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: { default: 'light' },
};
