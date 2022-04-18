import VideoFrame from './VideoFrame';

export default {
  title: 'components/VideoFrame',
  component: VideoFrame,
};

const Template = args => <VideoFrame {...args} />;

export const Default = Template.bind({});
Default.args = {
  showTrailer: true,
  videoUrl: [
    'https://www.youtube.com/watch?v=N3ss_-luLhE',
    'https://www.youtube.com/watch?v=bV59rGlNc6Y',
    'https://www.youtube.com/watch?v=wowK7ADGRsQ',
  ],
};
