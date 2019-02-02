import { storiesOf } from '@storybook/vue'
import Fuga from '~/components/Fuga.vue'

storiesOf('Fuga', module)
  .add('パターンA', () => ({
    components: { Fuga },
    render(h) {
      return <Fuga />
    }
  }))

  .add('パターンB', () => ({
    render(h) {
      return <Fuga />
    }
  }))