<template>
  <div class="about">
    <h1 class="mb-4 text-primary">{{ title }}</h1>
    <div class="card shadow-sm">
      <div class="card-body">
        <h5 class="card-title">Student Profile & Competencies</h5>
        <p class="card-text">FIN-LAB-1 VueJS Routing and Navigation Activity under Node.js v24 LTS.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      title: 'About This Project (Finals Required 1)'
    }
  }
}
</script>