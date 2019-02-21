/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './atoms/MyButton';
import Welcome from './molecules/Welcome';
import PortfolioCard from '~/components/molecules/PortfolioCard';
import 'bulma/css/bulma.css'

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));

  storiesOf('PortfolioCard', module).add('Storybook', () => ({
    components: { PortfolioCard },
    data() {
      return {
        portfolio:
        {"uuid":"portxxxxx1",
        "site_url":"https://site-example.com/1",
        "image_urls":["https://images.unsplash.com/photo-1475778057357-d35f37fa89dd","https://images.unsplash.com/photo-1475778057357-d35f37fa89dd","https://images.unsplash.com/photo-1475778057357-d35f37fa89dd"],
        "portfolio_comment":"俺の渾身のポートフォリオサイト、みんな見てくれよな！",
        "comments":[{"myself":true,"comment":"私のコメント"},{"myself":false,"comment":"誰かのコメント"}],
        "corrections":[{"myself":true,"correction":"添削への返信"},{"myself":false,"correction":"誰かの添削コメント"}],
        "like":4,
        "user":
          {"name":"john",
          "position":["フロントエンド","バックエンド","デザイナー"],
          "status":"戦闘中",
          "user_small_images_url":"https://bulma.io/images/placeholders/96x96.png"}
        }
      }
    },
    template: '<div style="width: 500px; "><portfolio-card :portfolio="portfolio" /></div>',
    methods: { action: linkTo('Button') },
  }));

/* eslint-enable react/react-in-jsx-scope */
