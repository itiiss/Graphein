import { CellDemos } from './Cell';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Example/Cell',

};

const Template = () => CellDemos();
export const Default = Template.bind({});
Default.args = {

};
