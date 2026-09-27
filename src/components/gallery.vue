<template>
  <div class="gallery">
    <h1 class="mb-4 text-primary">{{ title }}</h1>
    <div class="row g-3">
      <div class="col-md-4" v-for="item in items" :key="item.id">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text text-muted">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  data() {
    return {
      title: 'Project Gallery (Finals Required 1)',
      items: [
        { id: 1, name: 'Vue 3 Router SPA', desc: 'Declarative routing with createWebHistory.' },
        { id: 2, name: 'Bootswatch Theme', desc: 'Responsive Cerulean styling across all views.' },
        { id: 3, name: 'Cloud Server CI/CD', desc: 'Vercel and Netlify production deployment.' }
      ]
    }
  }
}
</script>