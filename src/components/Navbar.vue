<template>
  <nav
    class="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 w-[520px] md:w-[700px] text-lg"
    :class="scrolled ? 'scale-100' : 'scale-105'"
  >
    <!-- Desktop Navbar -->
    <div class="hidden md:block">
      <div class="bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-12 py-4 shadow-2xl">
        <div class="flex items-center justify-between">
          <a
            v-for="item in navItems"
            :key="item.id"
            @click="handleNavClick(item.id)"
            class="flex-1 text-center relative cursor-pointer group transition-all duration-300 hover:text-purple-400"
            :class="activeSectionComputed === item.id ? 'text-purple-400' : 'text-white/80'"
          >
            <span class="text-base font-semibold tracking-wide">{{ item.name }}</span>
            <div
              class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-4/5"
              :class="activeSectionComputed === item.id ? 'w-4/5' : ''"
            ></div>
          </a>
        </div>
      </div>
    </div>
    <!-- Mobile Navbar -->
    <div class="md:hidden">
      <div class="bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-4 py-3 shadow-2xl flex items-center justify-between">
        <span class="text-white font-bold text-lg">Menu</span>
        <button @click="mobileOpen = !mobileOpen" class="focus:outline-none">
          <svg v-if="!mobileOpen" class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16"/>
          </svg>
          <svg v-else class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <transition name="fade">
        <div
          v-if="mobileOpen"
          class="absolute left-0 right-0 mt-2 mx-auto w-11/12 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl z-50 py-4 px-2 flex flex-col items-center space-y-2"
        >
          <a
            v-for="item in navItems"
            :key="item.id"
            @click="handleMobileNav(item.id)"
            class="w-full text-center py-2 rounded-lg transition-all duration-200 font-medium cursor-pointer"
            :class="activeSectionComputed === item.id ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow' : 'text-white/80 hover:bg-white/10'"
          >
            {{ item.name }}
          </a>
        </div>
      </transition>
    </div>
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
  { id: 'kontak', name: 'Kontak' }
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

function handleNavClick(id) {
  emit('scrollTo', id)
  activeSectionLocal.value = id
}

function handleMobileNav(id) {
  emit('scrollTo', id)
  activeSectionLocal.value = id
  mobileOpen.value = false
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
