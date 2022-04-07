import React from 'react';
import EpisodeCard from './EpisodeCard';

export default {
  title: 'components/EpisodeCard',
  component: EpisodeCard,
};

const Template = args => <EpisodeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  episode: {
    name: 'Title of Episode',
    episode_number: 1,
  },
};
