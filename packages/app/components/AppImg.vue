<template>
  <figure v-lazy-container="{ selector: 'img' }" class="image__placeholder">
    <img
      :data-src="imageRequired.src"
      :data-srcset="imageRequired.srcSet"
      :data-loading="imageRequired.placeholder"
      :width="width"
      :height="height"
      :class="
        `${!rounded ? 'image__image--rounded-none' : ''} ${classes}`.trim()
      "
      :alt="alt"
      :src="imageRequired.placeholder"
      class="image__image"
    />
  </figure>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: [String, Number],
      default: 1920
    },
    height: {
      type: [String, Number],
      default: 1080
    },
    classes: {
      type: String,
      default: ''
    },
    rounded: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    imageRequired() {
      return require(`~/assets/images/screencapt/${this.src}`)
    }
  }
})
</script>

<style>
/* purgecss start ignore */
html:not([⚡]) {
  .image__placeholder {
    @apply overflow-hidden;
  }

  .image__image {
    @apply opacity-0 object-cover rounded;
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);

    &--rounded-none {
      @apply rounded-none;
    }
  }

  .image__image[lazy='loading'] {
    @apply opacity-100;
    filter: blur(0.9375rem);
  }

  .image__image[lazy='loaded'] {
    @apply opacity-100;
  }
}
/* purgecss end ignore */
</style>
