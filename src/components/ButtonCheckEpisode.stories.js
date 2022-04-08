import ButtonCheckEpisode from './ButtonCheckEpisode';

export default {
  title: 'buttons/ButtonCheckEpisode',
  component: ButtonCheckEpisode,
};

const Template = args => <ButtonCheckEpisode {...args} />;

export const Active = Template.bind({});
Active.args = { isEpisodeWatched: true, id: 123 };
Active.parameters = {
  backgrounds: { default: 'light' },
};

export const Inactive = Template.bind({});
Inactive.args = { isEpisodeWatched: false, id: 123 };
Inactive.parameters = {
  backgrounds: { default: 'light' },
};
