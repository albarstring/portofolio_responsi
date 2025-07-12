<template>
  <nav
    class="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 w-full max-w-[700px] px-2 md:px-0 text-lg"
    :class="scrolled ? 'scale-100' : 'scale-105'">
    <div
      class="bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-4 md:px-12 py-3 md:py-4 shadow-2xl flex items-center justify-between">
      <!-- Brand/Logo (optional, can be removed if not needed) -->
      <div class="block md:hidden text-white font-bold text-lg">Menu</div>
      <!-- Desktop Navbar -->
      <div class="hidden md:flex flex-1 items-center justify-between">
        <div class="flex flex-1 items-center justify-between w-full">
          <a v-for="item in navItems" :key="item.id" @click="scrollToSection(item.id)"
            class="flex-1 text-center relative cursor-pointer group transition-all duration-300 hover:text-purple-400"
            :class="activeSectionComputed === item.id ? 'text-purple-400' : 'text-white/80'">
            <span class="text-base font-semibold tracking-wide">{{ item.name }}</span>
            <div
              class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-4/5"
              :class="activeSectionComputed === item.id ? 'w-4/5' : ''"></div>
          </a>
        </div>
      </div>
      <!-- Mobile Navbar Button -->
      <button @click="mobileOpen = !mobileOpen" class="md:hidden focus:outline-none ml-auto">
        <svg v-if="!mobileOpen" class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
        </svg>
        <svg v-else class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <!-- Mobile Navbar Menu -->
    <transition name="fade">
      <div v-if="mobileOpen"
        class="md:hidden absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-[90%] bg-black/20 backdrop-blur-md border border-white/10 rounded-xl shadow-lg z-50 py-4 px-4 flex flex-col space-y-2 transition-all">
        <a
          v-for="item in navItems"
          :key="item.id"
          @click="scrollToSection(item.id, true)"
          class="flex-1 text-center relative cursor-pointer group transition-all duration-300 hover:text-purple-400 py-3 rounded-md text-base font-semibold tracking-wide"
          :class="activeSectionComputed === item.id ? 'text-purple-400' : 'text-white/80'"
          style="transition: background 0.2s, color 0.2s;"
        >
          <span>{{ item.name }}</span>
          <div
            class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-4/5"
            :class="activeSectionComputed === item.id ? 'w-4/5' : ''"
          ></div>
        </a>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'

const props = defineProps(['activeSection'])
const emit = defineEmits(['scrollTo'])

const navItems = [
  { id: 'profile', name: 'Profile' },
  { id: 'pendidikan', name: 'Pendidikan' },
  { id: 'skill', name: 'Skill' },
  { id: 'pengalaman', name: 'Pengalaman' },
  { id: 'proyek', name: 'Proyek' },
]

const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSectionLocal = ref(props.activeSection || 'profile')

// Watch for prop changes to update local active section
watch(
  () => props.activeSection,
  (val) => {
    if (val) activeSectionLocal.value = val
  }
)

// Compute active section (from prop or local)
const activeSectionComputed = computed(() => props.activeSection || activeSectionLocal.value)

function handleScroll() {
  scrolled.value = window.scrollY > 20

  // Auto update active section based on scroll position
  // Find the section closest to top
  let closest = null
  let minDist = Infinity
  for (const item of navItems) {
    const el = document.getElementById(item.id)
    if (el) {
      const rect = el.getBoundingClientRect()
      const dist = Math.abs(rect.top - 80) // 80px offset for navbar
      if (rect.top < window.innerHeight && dist < minDist) {
        minDist = dist
        closest = item.id
      }
    }
  }
  if (closest) {
    activeSectionLocal.value = closest
  }
}

// Fungsi scroll ke section yang sesuai ketika navbar diklik
function scrollToSection(id, isMobile = false) {
  const el = document.getElementById(id)
  if (el) {
    // Scroll ke section dengan offset agar tidak tertutup navbar
    const yOffset = -70 // offset px (tinggi navbar)
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
    activeSectionLocal.value = id
    if (isMobile) {
      mobileOpen.value = false
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
