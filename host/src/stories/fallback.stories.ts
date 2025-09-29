import { Meta, StoryObj } from '@storybook/angular';
import { FallbackComponent } from '../app/components/fallback/fallback.component';

const meta: Meta<FallbackComponent> = {
  title: 'Example/Fallback',
  component: FallbackComponent,
  tags: ['autodocs'],
  // ถ้าเป็น standalone component ต้อง import ด้วย
  render: (args: FallbackComponent) => ({
    props: args,
    imports: [FallbackComponent],
  }),
};
export default meta;

type Story = StoryObj<FallbackComponent>;

export const Default: Story = {
  args: {},
};
