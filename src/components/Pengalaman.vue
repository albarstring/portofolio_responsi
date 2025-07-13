<template>
  <!-- Experience Section -->
  <section id="pengalaman" class="py-36 px-6 relative" style="margin-top: -4rem; z-index: 1;">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-4xl md:text-6xl font-bold text-center mb-16 animate-fade-in-up"
        :class="{ 'animate-fade-in-up': experienceVisible }" ref="experienceSection">
        <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Pengalaman</span>
      </h2>

      <div class="space-y-8">
        <div v-for="(exp, index) in experience" :key="index"
          class="group p-8 bg-white/60 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
          :class="{ 'animate-slide-in-left': experienceVisible }" :style="{ animationDelay: (index * 0.2) + 's' }">

          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ exp.position }}</h3>
              <p class="text-purple-600 dark:text-purple-400 font-semibold text-left">{{ exp.company }}</p>
            </div>
            <div class="text-gray-400 mt-2 md:mt-0">
              <span
                class="bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300 px-3 py-1 rounded-full text-sm">
                {{ exp.period }}
              </span>
            </div>
          </div>

          <p class="text-gray-700 dark:text-gray-300 mb-4 text-left">{{ exp.description }}</p>

          <div class="flex flex-wrap gap-2">
            <span v-for="tech in exp.technologies" :key="tech" :title="tech"
              class="px-3 py-1 bg-blue-200/40 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-xs hover:bg-blue-200/60 dark:hover:bg-blue-500/30 transition-colors duration-300">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const experience = ref([])
const experienceVisible = ref(false)
const experienceSection = ref(null)

onMounted(async () => {
  try {
    const res = await axios.get('https://portofoliob-responsi.vercel.app/api/pengalaman');
    // Map API data to new structure
    experience.value = res.data.map(item => ({
      position: item.judul,
      company: item.perusahaan || '', // fallback if not available
      period: item.tanggal,
      description: item.deskripsi,
      technologies: item.teknologi || []
    }))
  } catch (err) {
    console.error('Gagal ambil data pengalaman:', err)
  }

  // Intersection Observer for animation
  if (experienceSection.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          experienceVisible.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(experienceSection.value)
  }
})
</script>

