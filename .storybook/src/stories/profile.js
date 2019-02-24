import { storiesOf } from '@storybook/vue'
import Profile from '~/components/Profile.vue'

storiesOf('Profile', module)
  .add('profile', () => ({
    components: { Profile },
    render(h) {
      return <Profile />
    }
  }))
