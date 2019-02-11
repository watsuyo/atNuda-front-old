import { storiesOf } from '@storybook/vue'
import Footer from '~/components/Footer.vue'

storiesOf('Footer', module)
  .add('footer', () => ({
    components: { Footer },
    render(h) {
      return <Footer />
    }
  }))