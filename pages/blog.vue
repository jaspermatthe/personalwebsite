<template>
  <div class="w-4/5 mx-auto md:w-1/2 flex flex-col h-screen" id="top">
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
