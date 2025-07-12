<template>
  <!-- Projects Section -->
  <section id="proyek"  class="py-36 px-6 relative"
    style="margin-top: -6rem; z-index: 1;">
    <div class="container mx-auto max-w-6xl">
      <h2
        class="text-4xl md:text-6xl font-bold text-center mb-16 animate-fade-in-up"
        :class="{ 'animate-fade-in-up': projectsVisible }"
        ref="projectsSection"
      >
        <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Proyek</span>
      </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up"
          :class="{ 'animate-fade-in-up': projectsVisible }"
          :style="{ animationDelay: (index * 0.1) + 's' }"
        >
          <!-- Project Image/Icon -->
          <div class="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
              <template v-if="project.icon">
                {{ project.icon }}
              </template>
              <template v-else-if="project.image">
                <img :src="project.image" :alt="project.title" class="h-full w-full object-contain" />
              </template>
              <template v-else>
                <span class="text-gray-400">No Image</span>
              </template>
            </div>
            <div class="absolute top-4 right-4" v-if="project.status">
              <span class="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">{{ project.status }}</span>
            </div>
          </div>
          <!-- Project Info -->
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 text-white">{{ project.title }}</h3>
            <p class="text-gray-400 text-sm mb-4">{{ project.description }}</p>
            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
              >
                {{ tech }}
              </span>
            </div>
            <!-- Action Buttons -->
            <div class="flex space-x-3">
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                class="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 py-2 px-4 rounded-lg text-sm font-semibold hover:scale-105 transition-transform duration-300 text-center"
              >
                Live Demo
              </a>
              <a
                v-if="project.source"
                :href="project.source"
                target="_blank"
                class="flex-1 border border-purple-400/50 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-purple-400/10 transition-all duration-300 text-center"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const projects = ref([])
const projectsVisible = ref(false)
const projectsSection = ref(null)

onMounted(async () => {
  try {
    const res = await axios.get('https://portofoliob-responsi.vercel.app/api/proyek')
    // Normalize data to fit the new structure
    projects.value = res.data.map(item => ({
      ...item,
      // Fallbacks for icon, technologies, status, source
      icon: item.icon || '',
      image: item.image || '',
      technologies: item.technologies || item.tech || [],
      status: item.status || '',
      source: item.source || item.repo || ''
    }))
  } catch (err) {
    console.error('Gagal ambil data proyek:', err)
  }

  // Intersection Observer for animation
  if (typeof window !== 'undefined' && projectsSection.value) {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          projectsVisible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(projectsSection.value)
  } else {
    // fallback: always visible
    projectsVisible.value = true
  }
})
</script>
