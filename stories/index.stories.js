/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Footer from '~/components/molecules/Footer.vue'
import Header from '~/components/molecules/Header.vue'
import Test from '~/components/Test.vue'

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

storiesOf('Test', module)
.add('test', () => ({
  components: { Test },
  render(h) {
    return <Test />
  }
}))

/* eslint-enable react/react-in-jsx-scope */
