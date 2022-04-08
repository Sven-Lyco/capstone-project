import ButtonCheckMovie from './ButtonCheckMovie';

export default {
  title: 'buttons/ButtonCheckMovie',
  component: ButtonCheckMovie,
};

const Template = args => <ButtonCheckMovie {...args} />;

export const Active = Template.bind({});
Active.args = { isMovieWatched: true, id: 123 };
Active.parameters = {
  backgrounds: { default: 'light' },
};

export const Inactive = Template.bind({});
Inactive.args = { isMovieWatched: false, id: 123 };
Inactive.parameters = {
  backgrounds: { default: 'light' },
};
