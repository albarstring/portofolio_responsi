<template>
  <section
    id="pendidikan"
    class="py-32 md:py-48 px-6 relative min-h-[100vh] overflow-visible"
    style="margin-top: -4rem; z-index: 1;"
  >
    <div class="container mx-auto max-w-6xl relative z-10">
      <h2
        class="text-4xl md:text-6xl font-bold text-center mb-16 animate-fade-in-up"
        ref="educationSection"
      >
        <span class="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Pendidikan
        </span>
      </h2>

      <div class="relative">
        <!-- Timeline Line -->
        <div
          class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full">
        </div>

        <div class="space-y-20">
          <div
            v-if="pendidikan.length"
            v-for="(edu, index) in pendidikan"
            :key="index"
            class="relative flex items-center min-h-[220px]"
            :class="[
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse',
              'animate-fade-in-up'
            ]"
            :style="{ animationDelay: (index * 0.2) + 's' }"
          >
            <!-- Timeline Dot -->
            <div
              class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-gray-900 dark:border-gray-200 z-10 shadow-lg">
            </div>

            <!-- Content -->
            <div
              class="w-5/12 max-w-[90vw] break-words p-6 md:p-8 bg-white/60 dark:bg-white/5 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-xl hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 min-h-[180px] flex flex-col justify-center shadow-lg"
            >
              <div class="text-sm text-purple-500 font-semibold mb-2 tracking-wide">
                {{ edu.period }}
              </div>
              <h3 class="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                {{ edu.institution }}
              </h3>
              <p class="text-purple-700 dark:text-purple-300 mb-2">
                {{ edu.major }}
              </p>
              <!-- <p class="text-gray-600 text-sm">{{ edu.description }}</p> -->
            </div>
          </div>

          <!-- Jika data kosong -->
          <p v-else class="text-center text-gray-400 dark:text-gray-500 italic mt-16">
            Data pendidikan belum tersedia.
          </p>
        </div>
      </div>
    </div>

    <!-- Decorative Gradient Blur -->
    <div class="pointer-events-none absolute inset-0 w-full h-full z-0">
      <div
        class="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-500/30 via-pink-400/20 to-blue-500/30 rounded-full blur-3xl">
      </div>
      <div
        class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-full blur-2xl">
      </div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-bl from-purple-500/20 to-blue-500/10 rounded-full blur-2xl">
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const pendidikan = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('https://portofoliob-responsi.vercel.app/api/pendidikan')
    pendidikan.value = res.data
  } catch (err) {
    console.error('Gagal ambil data pendidikan:', err)
  }
})
</script>

<style scoped>
/* Fade-in animation for timeline items */
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

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}
</style>
