import { action } from '@storybook/addon-actions';
import React from 'react';
import EpisodeCard from './EpisodeCard';

export default {
  title: 'components/Cards/EpisodeCard',
  component: EpisodeCard,
};

const Template = args => <EpisodeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleCheckEpisode: action(id => console.log(id)),
  episode: {
    id: 1,
    name: 'Title of Episode',
    episode_number: 1,
  },
};
