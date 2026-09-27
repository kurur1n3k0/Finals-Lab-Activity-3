<template>
  <div class="blog">
    <h1 class="mb-4 text-primary">{{ title }}</h1>
    <div class="card shadow-sm mb-3">
      <div class="card-body">
        <h5 class="card-title">Understanding Vue Router in Vue 3</h5>
        <p class="card-text">Vue Router 4 uses createRouter and createWebHistory for HTML5 history mode.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data() {
    return {
      title: 'Blog'
    }
  }
}
</script>