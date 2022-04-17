import ButtonCheck from './ButtonCheck';

export default {
  title: 'components/Buttons/ButtonCheck',
  component: ButtonCheck,
  argTypes: { onClick: 'onClick' },
};

const Template = args => <ButtonCheck {...args} />;

export const Active = Template.bind({});
Active.args = { isActive: true, id: 123 };
Active.parameters = {
  backgrounds: { default: 'light' },
};

export const Inactive = Template.bind({});
Inactive.args = { isActive: false, id: 123 };
Inactive.parameters = {
  backgrounds: { default: 'light' },
};
