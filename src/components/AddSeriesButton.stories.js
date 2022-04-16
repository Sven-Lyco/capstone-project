import AddSeriesButton from './AddSeriesButton';

export default {
  title: 'components/Buttons/AddSeriesButton',
  component: AddSeriesButton,
  argTypes: { onClick: 'onClick' },
};

const Template = args => <AddSeriesButton {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: { default: 'light' },
};
