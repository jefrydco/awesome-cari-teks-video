<template>
  <section class="card">
    <div class="card__img">
      <app-img :src="img" :alt="title" />
    </div>
    <div class="card__meta">
      <header>
        <h2 class="card__title">
          {{ title }}
        </h2>
      </header>
      <p class="card__summary">
        {{ summary }}
      </p>
      <a :aria-label="title" :href="href" target="_blank" class="card__link">
        {{ title }}
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    summary: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      required: true
    }
  }
})
</script>

<style>
/* purgecss start ignore */
.card {
  @apply mb-12 mx-4 max-w-full rounded overflow-hidden shadow relative;
  background-color: var(--card-bg);

  &__img {
    @apply h-64 rounded;
    background-color: var(--inline-code-bg);
  }

  img {
    @apply h-64 w-full object-cover;
  }

  &:hover {
    @apply shadow-lg;
  }

  &__meta {
    @apply p-6;
  }

  &__title {
    @apply capitalize font-bold text-2xl mt-0 mb-4;
  }

  &__summary {
    @apply leading-normal mb-0;
  }

  &__link {
    @apply absolute top-0 left-0 w-full h-full overflow-hidden z-0;
    text-indent: -9999px;

    &:focus {
      border: 0.125rem solid var(--text-normal);
    }
  }
}

@screen lg {
  .card {
    max-width: 30%;
  }
}

body {
  &.dark {
    .card {
      img {
        filter: brightness(0.7);
      }
    }
  }
}
/* purgecss end ignore */
</style>
