import { action } from '@storybook/addon-actions';
import InnerNavigation from './InnerNavigation';
import PAGES from '../assets/pages';

export default {
  title: 'components/Navigation/InnerNavigation',
  component: InnerNavigation,
};

const Template = args => <InnerNavigation {...args} />;

export const Details = Template.bind({});
Details.args = {
  handleNavigation: action(currentPage => console.log(currentPage)),
  currentPage: PAGES.DETAILS,
};

export const Seasons = Template.bind({});
Seasons.args = {
  handleNavigation: action(currentPage => console.log(currentPage)),
  currentPage: PAGES.SEASONS,
};
