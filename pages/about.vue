<template>
  <div id="top" class="w-max mx-auto md:w-11/12 flex flex-col h-screen">
    <NavigationBar />
    <div>
      <h1 class="text-5xl pb-3 mt-2 z-10">{{ page.title }}</h1>
      <nuxt-content class="mt-4 prose dark:prose-dark max-w-none" :document="page" />
    </div>
    <PageFooter />
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  async asyncData ({ $content }) {
    const page = await $content('single-pages/about')
      .only(['title', 'body', 'type'])
      .fetch()
    return {
      page
    }
  }
}
</script>
