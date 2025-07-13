<template>
  <!-- Profile Section -->
  <section id="profile" class="min-h-screen flex items-center justify-center px-6 relative" style="margin-top: 6rem;">
    <div class="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-12">
      <!-- Left: Text Content -->
      <div class="flex-1 text-center md:text-left">
        <!-- Name and Title -->
        <div class="animate-fade-in-up" style="animation-delay: 0.2s">
          <h1 class="text-5xl md:text-7xl font-bold mb-4">
            <span
              class="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Rizqi Zulmiazta Albar
            </span>
          </h1>
          <h2 class="text-2xl md:text-3xl text-gray-300 mb-6">
            <span class="typewriter">{{ displayedTitle }}</span>
            <span class="animate-blink">|</span>
          </h2>
        </div>

        <!-- Description -->
        <p class="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up"
          style="animation-delay: 0.4s">
          Seorang pengembang yang mencintai teknologi dan inovasi. Saya menciptakan solusi digital yang tidak hanya
          fungsional,
          tetapi juga memberikan pengalaman pengguna yang luar biasa.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style="animation-delay: 0.6s">
          <button @click="scrollToSection('proyek')"
            class="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            <span class="relative z-10">Lihat Proyek</span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
          </button>
          <a href="/CV_Albar.pdf" download
            class="px-8 py-4 border border-purple-400/50 rounded-full font-semibold hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300 hover:scale-105">
            Download CV
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center md:justify-start space-x-6 mt-12 animate-fade-in-up" style="animation-delay: 0.8s">
          <a v-for="social in boxSocialLinks" :key="social.name" :href="social.url" target="_blank" rel="noopener"
            class="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-xl hover:bg-white/10 hover:scale-110 hover:text-purple-400 transition-all duration-300">
            <i :class="social.iconClass"></i>
          </a>
        </div>
      </div>

      <!-- Right: Profile Image (Keren & Modern) -->
      <div class="flex-1 flex justify-center items-center mb-8 md:mb-0 animate-fade-in-up">
        <div class="profile-image-hero-cool profile-image-hero-cool-lg relative flex items-center justify-center">
          <!-- Animated Gradient Ring -->
          <span class="profile-gradient-ring absolute inset-0"></span>
          <!-- Glassmorphism Layer -->
          <span class="profile-glass-bg absolute inset-2"></span>
          <!-- Floating Dots -->
          <span class="profile-dot profile-dot-1"></span>
          <span class="profile-dot profile-dot-2"></span>
          <span class="profile-dot profile-dot-3"></span>
          <!-- Main Profile Image -->
          <img
            :src="profileImage"
            alt="Foto Rizqi Zulmiazta Albar"
            class="profile-img-cool profile-img-cool-lg relative z-10"
          />
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import albar2 from '../assets/Albar.jpg'
const profileImage = ref(albar2)

const boxSocialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/albarstring',
    iconClass: 'bx bxl-github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/rz-albar',
    iconClass: 'bx bxl-linkedin'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/rz_albar',
    iconClass: 'bx bxl-instagram'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    iconClass: 'bx bxl-twitter'
  }
]

// Typewriter effect logic
const titles = [
  'Full Stack Developer',
  'UI/UX Designer',
  'Problem Solver',
  'Tech Innovator'
]
const displayedTitle = ref('')
let titleIndex = 0
let charIndex = 0
let isDeleting = false

function typeWriter() {
  const current = titles[titleIndex]
  if (!isDeleting) {
    displayedTitle.value = current.slice(0, charIndex + 1)
    charIndex++
    if (charIndex === current.length) {
      isDeleting = true
      setTimeout(typeWriter, 1200)
      return
    }
  } else {
    displayedTitle.value = current.slice(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      titleIndex = (titleIndex + 1) % titles.length
      setTimeout(typeWriter, 400)
      return
    }
  }
  setTimeout(typeWriter, isDeleting ? 50 : 100)
}

onMounted(() => {
  typeWriter()
})

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<style>
/* Keren & Modern Profile Image Styles */
.profile-image-hero-cool {
  width: 320px;
  height: 320px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  z-index: 1;
}

/* Tambahkan ukuran lebih besar untuk profile image */
.profile-image-hero-cool-lg {
  width: 420px;
  height: 420px;
}

@media (max-width: 768px) {
  .profile-image-hero-cool-lg {
    width: 320px;
    height: 320px;
  }
}

.profile-gradient-ring {
  z-index: 1;
  border-radius: 50%;
  background: conic-gradient(from 180deg at 50% 50%, #a78bfa, #f472b6, #60a5fa, #a78bfa);
  filter: blur(0px);
  animation: spin-gradient-ring 6s linear infinite;
  width: 100%;
  height: 100%;
  display: block;
  box-shadow: 0 0 60px 10px rgba(168,139,250,0.25), 0 0 120px 20px rgba(96,165,250,0.15);
}

@keyframes spin-gradient-ring {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}

.profile-glass-bg {
  z-index: 2;
  border-radius: 50%;
  background: rgba(255,255,255,0.10);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  width: 92%;
  height: 92%;
  left: 4%;
  top: 4%;
  position: absolute;
  border: 1.5px solid rgba(168,139,250,0.18);
}

.profile-img-cool {
  width: 85%;
  height: 85%;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 32px 0 rgba(96,165,250,0.18), 0 2px 8px 0 rgba(236,72,153,0.10);
  border: 4px solid rgba(255,255,255,0.18);
  background: #181825;
  position: relative;
  z-index: 3;
  transition: transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s;
}

/* Tambahkan ukuran lebih besar untuk gambar profil */
.profile-img-cool-lg {
  width: 95%;
  height: 95%;
}

@media (max-width: 768px) {
  .profile-img-cool-lg {
    width: 85%;
    height: 85%;
  }
}

.profile-img-cool:hover {
  transform: scale(1.04) rotate(-2deg);
  box-shadow: 0 8px 48px 0 rgba(168,139,250,0.25), 0 0 120px 20px rgba(96,165,250,0.18);
}

.profile-dot {
  position: absolute;
  border-radius: 50%;
  opacity: 0.7;
  z-index: 4;
  pointer-events: none;
  animation: float-dot 4s ease-in-out infinite alternate;
}
.profile-dot-1 {
  width: 32px; height: 32px;
  background: linear-gradient(135deg, #a78bfa 60%, #f472b6 100%);
  top: 18px; left: 22px;
  animation-delay: 0s;
}
.profile-dot-2 {
  width: 18px; height: 18px;
  background: linear-gradient(135deg, #60a5fa 60%, #a78bfa 100%);
  bottom: 32px; right: 38px;
  animation-delay: 1.2s;
}
.profile-dot-3 {
  width: 14px; height: 14px;
  background: linear-gradient(135deg, #f472b6 60%, #60a5fa 100%);
  top: 38px; right: 38px;
  animation-delay: 2.1s;
}

@keyframes float-dot {
  0% { transform: translateY(0) scale(1);}
  100% { transform: translateY(-18px) scale(1.15);}
}

/* Animations and utility classes (keep from original) */
@keyframes fade-in-up {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}
.animate-spin-slow {
  animation: spin-slow 10s linear infinite;
}
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
.animate-blink {
  animation: blink 1s steps(2, start) infinite;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Hero section background: hitam elegan dengan efek gradient dan bokeh */
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