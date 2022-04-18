import DeleteButton from './DeleteButton';

export default {
  title: 'components/Buttons/DeleteButton',
  component: DeleteButton,
  argTypes: { onClick: 'onClick' },
};

const Template = args => <DeleteButton {...args} />;

export const Default = Template.bind({});
Default.parameters = {};
