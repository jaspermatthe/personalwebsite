<template>
    <div>
        <div class="text-3xl py-5 font-serif">
            Blog Posts
        </div>
        <div class="grid mb-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pr-5">
            <div class="max-w-sm overflow-hidden m-2 border rounded-xl border-[#404040] dark:border-[#e4e6eb]"
            v-for="post in posts"
            :key="post.title"
            >
                <NuxtLink class="no-highlight" :to="`${post.slug}`">
                <div class="flex justify-between flex-col h-full">
                    <div class="px-6 py-4 card-body">
                        <div class="font-bold text-xl mb-2 card-title dark:brightness-[.6]">{{post.title}}</div>
                        <div>
                            <span v-for="(tag,index) in post.tags" :key="tag">
                                {{tag}}
                                <span v-if="index != post.tags.length - 1"> | </span>
                            </span>
                        </div>
                    </div>
                </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    posts: Array
  }
}
</script>
