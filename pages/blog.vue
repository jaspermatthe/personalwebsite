<template>
  <div id="top" class="w-max mx-auto md:w-11/12 flex flex-col h-screen">
    <NavigationBar />
    <MainHero />
    <WorkExperience />
    <BlogPostPreview :posts="posts" />
    <PageFooter />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $content }) {
    const posts = await $content('posts', { deep: true })
      .only(['title', 'date', 'tags', 'slug'])
      .sortBy('year', 'desc')
      .fetch()
    return { posts }
  }
}
</script>
