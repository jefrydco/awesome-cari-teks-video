<i18n>
{
  "en": {
    "repository": "GitHub Repository",
    "app_url": "Application URL"
  },
  "id": {
    "repository": "Repositori GitHub",
    "app_url": "Pranala Aplikasi"
  }
}
</i18n>

<template>
  <section class="card">
    <div class="card__img">
      <app-img :src="img" :alt="name" width="346" height="256" />
    </div>
    <div class="card__meta">
      <header>
        <h2 class="card__title">
          <a
            :href="`https://github.com/${githubId}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ name }}
          </a>
        </h2>
      </header>
      <div class="card__summary">
        <div class="summary__item">
          <h3>{{ $t('repository') }}</h3>
          <a :href="githubUrl" target="_blank" rel="noopener noreferrer">
            {{ githubUrl }}
          </a>
        </div>
        <div class="summary__item">
          <h3>{{ $t('app_url') }}</h3>
          <a :href="appUrl" target="_blank" rel="noopener noreferrer">
            {{ appUrl }}
          </a>
        </div>
      </div>
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
    name: {
      type: String,
      default: ''
    },
    githubId: {
      type: String,
      default: ''
    },
    githubUrl: {
      type: String,
      default: ''
    },
    appUrl: {
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
    @apply capitalize font-bold text-2xl mt-0 mb-5;
  }

  &__summary {
    @apply leading-normal mb-0;
  }
}

.summary {
  &__item {
    &:not(:last-child) {
      @apply mb-5;
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
