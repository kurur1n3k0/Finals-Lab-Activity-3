<template>
  <div id="app">
    <!-- Bootswatch Cerulean Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm mb-4">
      <div class="container">
        <router-link class="navbar-brand fw-bold" :to="{ name: 'home' }">
          <i class="fab fa-vuejs me-2"></i>VueJS
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse show" id="navMenu">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'blog' }">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'gallery' }">Gallery</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'about' }">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'contact' }">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Routed Views Render Target -->
    <main class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>