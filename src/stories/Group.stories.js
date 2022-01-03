import { GroupChart } from './Group';

export default {
  title: 'Example/GroupChart',
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
};

const Template = (args) => GroupChart(args);

export const Default = Template.bind({});
Default.args = {
  // More on composing args: https://storybook.js.org/docs/html/writing-stories/args#args-composition

};
