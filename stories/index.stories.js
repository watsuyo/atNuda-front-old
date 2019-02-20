/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Footer from '~/components/Footer.vue'
import Header from '~/components/Header.vue'

storiesOf('Footer', module)
  .add('footer', () => ({
    components: { Footer },
    render(h) {
      return <Footer />
    }
  }))

storiesOf('Header', module)
.add('header', () => ({
  components: { Header },
  render(h) {
    return <Header />
  }
}))
/* eslint-enable react/react-in-jsx-scope */
