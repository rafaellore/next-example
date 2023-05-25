import { Meta, Story } from '@storybook/react/types-6-0';
import CloneMe, { CloneMeProps } from '.';

export default {
  title: 'Clone me',
  component: CloneMe,
} as Meta;

export const Template: Story<CloneMeProps> = (args) => {
  return (
    <div>
      <CloneMe {...args} />
    </div>
  );
};
