import { storiesOf } from '@storybook/vue'
import Hoge from '~/components/Hoge.vue'

storiesOf('Hoge', module)
  .add('abe', () => ({
    components: { Hoge },
    render(h) {
      return <Hoge />
    }
  }))