import { IntervalDemos } from './Interval';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Example/Interval',

};

const Template = () => IntervalDemos();
export const Default = Template.bind({});
Default.args = {

};
