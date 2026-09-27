<template>
  <div class="home">
    <div class="p-5 mb-4 bg-light rounded-3 border">
      <h1 class="display-5 fw-bold text-primary">{{ title }}</h1>
      <p class="lead">{{ msg }}</p>
      <hr class="my-4">
      <p>Single Page Application navigation successfully configured with Vue Router 4 and Vite.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      title: 'Welcome to Home Page',
      msg: 'Welcome to Your Vue.js 3 App on Node v24 LTS'
    }
  }
}
</script>