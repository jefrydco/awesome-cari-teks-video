<template>
  <div class="mx-auto">
    <nuxt />
    <app-switch-theme />
    <app-to-top />
    <app-scroll-indicator />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: this.$t('description'),
      ...this.$nuxtI18nSeo()
    }
  }
})
</script>
