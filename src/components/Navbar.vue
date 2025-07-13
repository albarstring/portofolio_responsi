<template>
  <nav
    class="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 w-full max-w-[700px] px-2 md:px-0 text-lg"
    :class="scrolled ? 'scale-100' : 'scale-105'"
  >
    <div
      class="backdrop-blur-md border rounded-full px-4 md:px-12 py-3 md:py-4 shadow-2xl flex items-center justify-between
      bg-white/80 border-black/10 text-black dark:bg-black/20 dark:border-white/10 dark:text-white"
    >
      <!-- Logo (Mobile only) -->
      <div class="block md:hidden font-bold text-lg">Menu</div>

      <!-- Desktop Navbar -->
      <div class="hidden md:flex flex-1 items-center justify-between">
        <div class="flex flex-1 items-center justify-between w-full">
          <a
            v-for="item in navItems"
            :key="item.id"
            @click="scrollToSection(item.id)"
            class="flex-1 text-center relative cursor-pointer group transition-all duration-300 hover:text-purple-500"
            :class="activeSectionComputed === item.id ? 'text-purple-500' : 'text-inherit'"
          >
            <span class="text-base font-semibold tracking-wide">{{ item.name }}</span>
            <div
              class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-4/5"
              :class="activeSectionComputed === item.id ? 'w-4/5' : ''"
            ></div>
          </a>
        </div>
      </div>

      <!-- Toggle Button -->
      <button
        @click="toggleTheme"
        class="ml-4 hover:text-purple-500 transition-colors duration-300 text-xl"
        :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
      >
        <i :class="isDark ? 'bx bx-sun' : 'bx bx-moon'"></i>
      </button>

      <!-- Mobile Menu Toggle -->
      <button @click="mobileOpen = !mobileOpen" class="md:hidden ml-auto">
        <svg v-if="!mobileOpen" class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
        </svg>
        <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navbar -->
    <transition name="fade">
      <div
        v-if="mobileOpen"
        class="md:hidden absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-[90%] rounded-xl shadow-lg z-50 py-4 px-4 flex flex-col space-y-2
        backdrop-blur-md bg-white/80 border border-black/10 text-black dark:bg-black/20 dark:border-white/10 dark:text-white"
      >
        <a
          v-for="item in navItems"
          :key="item.id"
          @click="scrollToSection(item.id, true)"
          class="text-center relative cursor-pointer group transition-all duration-300 hover:text-purple-500 py-3 rounded-md text-base font-semibold tracking-wide"
          :class="activeSectionComputed === item.id ? 'text-purple-500' : 'text-inherit'"
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
const isDark = ref(true)

watch(
  () => props.activeSection,
  (val) => {
    if (val) activeSectionLocal.value = val
  }
)

const activeSectionComputed = computed(() => props.activeSection || activeSectionLocal.value)

function handleScroll() {
  scrolled.value = window.scrollY > 20

  let closest = null
  let minDist = Infinity
  for (const item of navItems) {
    const el = document.getElementById(item.id)
    if (el) {
      const rect = el.getBoundingClientRect()
      const dist = Math.abs(rect.top - 80)
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

function scrollToSection(id, isMobile = false) {
  const el = document.getElementById(id)
  if (el) {
    const yOffset = -70
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
    activeSectionLocal.value = id
    if (isMobile) {
      mobileOpen.value = false
    }
  }
}

function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme()
}

function applyTheme() {
  const html = document.documentElement
  if (isDark.value) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme !== 'light'
  applyTheme()
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
