import type { Meta, StoryObj } from '@storybook/react'
import NavigationBar from '@/app/components/navbar/Navbar_final'

import { Page } from './Page'

const meta = {
  title: 'Example/Page',
  component: NavigationBar,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const Navbar: Story = {
  args: {
    primary: true,
    label: 'Navbar_final',
  },
}
