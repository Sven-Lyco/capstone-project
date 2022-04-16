import AddMovieButton from './AddMovieButton';

export default {
  title: 'components/Buttons/AddMovieButton',
  component: AddMovieButton,
  argTypes: { onClick: 'onClick' },
};

const Template = args => <AddMovieButton {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  backgrounds: { default: 'light' },
};
