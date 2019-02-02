import { configure } from '@storybook/vue'

const loadStories = () => {
  require("../.storybook/src/stories/index")
}

configure(loadStories, module)