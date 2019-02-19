<template>
  <div class="modal" v-bind:class="{'is-active':modalActives}">
    <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <div class="content has-text-centered">
            <p class="control">
              <h3>message</h3>
            </p>
            <span>&nbsp;</span>
          </div>
        </div>
      </div>
      <button @click="$emit('set')" class="modal-close"></button>
  </div>
</template>

<script>
export default {
  name: 'PortfolioDetailModal',
  props: {
    isActive: {
      type: Boolean,
      defalt: false,
      required: true
    }
  },
  computed: {
    modalActives: function() {
      return this.isActive
    }
  }
}
</script>

<style>

</style>
