import ButtonBack from './ButtonBack';

export default {
  title: 'components/Buttons/ButtonBack',
  component: ButtonBack,
  argTypes: { onClick: 'onClick' },
};

const Template = args => <ButtonBack {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: { default: 'light' },
};
