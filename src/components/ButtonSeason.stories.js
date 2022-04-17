import ButtonSeason from './ButtonSeason';

export default {
  title: 'components/Buttons/ButtonSeason',
  component: ButtonSeason,
  argTypes: { onClick: 'onClick' },
};

const Template = args => <ButtonSeason {...args} />;

export const Active = Template.bind({});
Active.args = { name: 'Staffel 1', isActive: true };

export const Inactive = Template.bind({});
Inactive.args = { name: 'Staffel 1', isActive: false };
