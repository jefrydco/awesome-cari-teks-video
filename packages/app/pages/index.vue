<i18n>
{
  "en": {
    "description": "Display cool application that use Cari Teks Video API",
    "source_code": "Source Code",
    "api_docs": "API Docs",
    "blog_post": "Blog Post",
    "english": "English",
    "indonesian": "Indonesian",
    "other_lang": "Read in other languages",
    "search": "Search",
    "no_result": "No result found, please try again using another keyword"
  },
  "id": {
    "description": "Menampilkan daftar aplikasi keren yang menggunakan API Cari Teks Video",
    "source_code": "Kode Sumber",
    "api_docs": "Dokumentasi API",
    "blog_post": "Postingan Blog",
    "english": "Bahasa Inggris",
    "indonesian": "Bahasa Indonesia",
    "other_lang": "Baca dalam bahasa lain",
    "search": "Cari",
    "no_result": "Hasil pencarian tidak ditemukan, mohon coba lagi menggunakan kata kunci yang lain"
  }
}
</i18n>

<template>
  <main class="content">
    <header class="content__header">
      <h1 class="content__title">Awesome Cari Teks Video</h1>
      <p class="content__desc">{{ $t('description') }}</p>
      <p class="content__desc">
        {{ $t('other_lang') }}:
        <nuxt-link :to="switchLocalePath(changeLocaleLink)">
          {{ $i18n.locale === 'id' ? $t('english') : $t('indonesian') }}
        </nuxt-link>
      </p>
      <nav class="content__nav">
        <a
          v-for="link in links"
          :key="link.text"
          class="content__link"
          :href="link.url"
        >
          {{ $t(link.text) }}
        </a>
      </nav>
      <div class="content__search">
        <input
          v-model="keyword"
          type="text"
          class="input"
          :aria-label="$t('search')"
        />
      </div>
    </header>
    <div v-if="results.length" class="content__data">
      <app-card
        v-for="result in results"
        :id="result['githubId']"
        :key="result['githubId']"
        :img="`${result['githubId']}.png`"
        :title="result['name']"
        :summary="result['appUrl']"
        :href="result['appUrl']"
      ></app-card>
    </div>
    <p v-else class="content__empty">
      {{ $t('no_result') }}
    </p>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import data from '@awesome-cari-teks-video/data'
import lunr from 'lunr'
import debounceFn from 'debounce-fn'

Vue.use(VueLazyload, {
  observer: true,
  lazyComponent: true
})

const idx = lunr(function () {
  this.ref('githubId')
  this.field('name')
  this.field('githubUrl')
  this.field('appUrl')

  data.forEach((datum) => {
    this.add(datum)
  })
})

export default Vue.extend({
  data() {
    return {
      keyword: null,
      results: data,
      links: [
        {
          text: 'source_code',
          url: 'https://github.com/jefrydco/awesome-cari-teks-video'
        },
        {
          text: 'api_docs',
          url: 'https://github.com/jefrydco/cari-teks-video-api'
        },
        {
          text: 'blog_post',
          url: 'https://jefrydco.id/blog/'
        }
      ]
    }
  },
  head() {
    return {
      title: 'Awesome Cari Teks Video'
    }
  },
  computed: {
    changeLocaleLink() {
      const locale = this.$i18n.locales.find(
        (locale) => locale.code !== this.$i18n.locale
      )
      if (locale) {
        return locale.code
      }
      return 'id'
    }
  },
  watch: {
    keyword: debounceFn(
      function (keyword) {
        this.results = data.filter((datum) =>
          idx
            .search(keyword || '')
            .some((result) => result.ref === datum.githubId)
        )
      },
      { wait: 250 }
    )
  }
})
</script>

<style>
.content {
  @apply max-w-6xl mx-auto;

  &__header {
    @apply text-center py-12;
  }

  &__title {
    @apply text-3xl mb-1;
  }

  &__desc {
    @apply mb-3;
  }

  &__nav {
    @apply mb-6;
  }

  &__link:not(:last-child) {
    @apply mr-3;
  }

  &__search {
    @apply flex justify-center;
  }

  &__data {
    @apply flex flex-wrap;
  }

  &__empty {
    @apply text-center;
  }
}
.input {
  @apply mb-4 py-1 px-2 rounded;
  background-color: var(--card-bg);

  &:not(:last-child) {
    @apply mr-2;
  }

  &:disabled {
    background-color: var(--bg-disabled);
    color: var(--text-disabled);
  }
}
</style>
