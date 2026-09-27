import { createRouter, createWebHistory } from 'vue-router';
import home from '../components/home.vue';
import blog from '../components/blog.vue';
import gallery from '../components/gallery.vue';
import about from '../components/about.vue';
import contact from '../components/contact.vue';

const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/blog', name: 'blog', component: blog },
  { path: '/gallery', name: 'gallery', component: gallery },
  { path: '/about', name: 'about', component: about },
  { path: '/contact', name: 'contact', component: contact }
];

const router = createRouter({
  // import.meta.env.BASE_URL automatically picks up '/vuejs-routing/' from vite.config.js
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;