import { storiesOf } from '@storybook/vue'
import Header from '~/components/Header.vue'

storiesOf('Header', module)
  .add('header', () => ({
    components: { Header },
    render(h) {
      return <Header />
    }
  }))