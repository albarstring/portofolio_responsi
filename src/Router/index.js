import { createRouter, createWebHistory } from 'vue-router'
import Hero from '../pages/Hero.vue'
import Pendidikan from '../pages/Pendidikan.vue'
import Skill from '../pages/Skill.vue'
import Pengalaman from '../pages/Pengalaman.vue'
import Proyek from '../pages/Proyek.vue'
import Kontak from '../pages/Kontak.vue'


const routes = [
  { path: '/', component: Hero },
  { path: '/pendidikan', component: Pendidikan },
  { path: '/skill', component: Skill },
  { path: '/pengalaman', component: Pengalaman },
  { path: '/proyek', component: Proyek },
  { path: '/kontak', component: Kontak },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
