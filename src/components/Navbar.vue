<template>
  <nav class="fixed w-full bg-white shadow z-50">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0 flex items-center">
          <span class="text-xl font-bold text-blue-600">MyPortfolio</span>
        </div>
        <div class="hidden md:flex md:items-center md:space-x-8">
          <RouterLink to="/" class="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">Profil</RouterLink>
          <RouterLink to="/pendidikan" class="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">Pendidikan</RouterLink>
          <RouterLink to="/skill" class="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">Skill</RouterLink>
          <RouterLink to="/pengalaman" class="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">Pengalaman</RouterLink>
          <RouterLink to="/proyek" class="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">Proyek</RouterLink>
          <RouterLink to="/kontak" class="text-gray-700 hover:text-blue-500 transition-colors duration-200 font-medium">Kontak</RouterLink>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="isOpen = !isOpen" class="text-gray-700 hover:text-blue-500 focus:outline-none">
            <svg v-if="!isOpen" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile menu -->
    <transition name="fade">
      <div v-if="isOpen" class="md:hidden bg-white shadow-lg">
        <div class="px-2 pt-2 pb-3 space-y-1 flex flex-col">
          <RouterLink @click="isOpen = false" to="/" class="block px-3 py-2 rounded text-gray-700 hover:bg-blue-50 hover:text-blue-500 font-medium transition">Profil</RouterLink>
          <RouterLink @click="isOpen = false" to="/pendidikan" class="block px-3 py-2 rounded text-gray-700 hover:bg-blue-50 hover:text-blue-500 font-medium transition">Pendidikan</RouterLink>
          <RouterLink @click="isOpen = false" to="/skill" class="block px-3 py-2 rounded text-gray-700 hover:bg-blue-50 hover:text-blue-500 font-medium transition">Skill</RouterLink>
          <RouterLink @click="isOpen = false" to="/pengalaman" class="block px-3 py-2 rounded text-gray-700 hover:bg-blue-50 hover:text-blue-500 font-medium transition">Pengalaman</RouterLink>
          <RouterLink @click="isOpen = false" to="/proyek" class="block px-3 py-2 rounded text-gray-700 hover:bg-blue-50 hover:text-blue-500 font-medium transition">Proyek</RouterLink>
          <RouterLink @click="isOpen = false" to="/kontak" class="block px-3 py-2 rounded text-gray-700 hover:bg-blue-50 hover:text-blue-500 font-medium transition">Kontak</RouterLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
