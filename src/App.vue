<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Pendidikan from './components/Pendidikan.vue'
import Skill from './components/Skill.vue'
import Pengalaman from './components/Pengalaman.vue'
import Proyek from './components/Proyek.vue'
import Kontak from './components/Footer.vue'

// Data untuk Hero component
const currentTitle = ref('Full Stack Developer')
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
  { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
  { name: 'Email', url: 'mailto:john@example.com', icon: '📧' }
]

// Typewriter effect
const titles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator']
let currentIndex = 0

onMounted(() => {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % titles.length
    currentTitle.value = titles[currentIndex]
  }, 3000)
})
</script>

<template>
  <div class="hero-bg text-white">
    <Navbar />
    <Hero :currentTitle="currentTitle" :socialLinks="socialLinks" />
    <Pendidikan />
    <Skill />
    <Pengalaman />
    <Proyek />
    <Kontak />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

#app {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

/* Background gradasi dan bokeh elegan */
.hero-bg {
  background: #0a0a13;
  background-image:
    radial-gradient(ellipse at 20% 30%, rgba(128, 0, 255, 0.12) 0, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(0, 180, 255, 0.10) 0, transparent 60%),
    radial-gradient(ellipse at 50% 80%, rgba(255, 0, 128, 0.10) 0, transparent 60%);
  position: relative;
  overflow: hidden;
}

.hero-bg::before,
.hero-bg::after {
  content: '';
  position: absolute;
  z-index: 0;
  pointer-events: none;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.25;
}

.hero-bg::before {
  width: 320px;
  height: 320px;
  left: -120px;
  top: 10%;
  background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
  animation: hero-bokeh1 12s ease-in-out infinite alternate;
}

.hero-bg::after {
  width: 220px;
  height: 220px;
  right: -80px;
  bottom: 10%;
  background: linear-gradient(135deg, #ec4899 0%, #6366f1 100%);
  animation: hero-bokeh2 14s ease-in-out infinite alternate;
}

@keyframes hero-bokeh1 {
  0% {
    transform: translateY(0) scale(1);
  }
  100% {
    transform: translateY(40px) scale(1.1);
  }
}

@keyframes hero-bokeh2 {
  0% {
    transform: translateY(0) scale(1);
  }
  100% {
    transform: translateY(-30px) scale(1.05);
  }
}
</style>
