<template>
  <section id="skill" class="py-20 md:py-32 px-6 relative min-h-[100vh] overflow-visible"
    style="margin-top: -4rem; z-index: 1;">
    <div class="container mx-auto max-w-6xl relative z-10">
      <h2 class="text-4xl md:text-6xl font-bold text-center mb-16">
        <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Keahlian
        </span>
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(group, category) in groupedSkills" :key="category"
          class="bg-white/60 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl p-6 shadow backdrop-blur-md transition hover:scale-105">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {{ categoryMap[category] }}
          </h3>

          <div v-for="skill in group" :key="skill.id" class="mb-4">
            <div class="flex items-center justify-between mb-1 text-gray-800 dark:text-white text-sm">
              <div class="flex gap-2 items-center">
                <i :class="['text-xl', skill.icon]" :title="skill.name" aria-hidden="true"></i>
                <span>{{ skill.name }}</span>
              </div>
              <span class="text-blue-500 dark:text-blue-400">{{ skill.level_num }}%</span>
            </div>
            <div class="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2">
              <div
                class="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                :style="{ width: skill.level_num + '%' }">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
        <!-- Lebar marquee disamakan dengan container utama -->
        <div class="w-full max-w-6xl mx-auto mt-16 overflow-hidden select-none relative">
          <div ref="marquee" class="flex gap-8 py-2 px- pointer-events-auto" style="will-change: transform;"
            @mouseenter="isMarqueePaused = true" @mouseleave="isMarqueePaused = false">
            <!-- Render icon boxicon -->
            <template v-for="icon in boxicons" :key="icon.name">
              <div class="h-40 w-40 flex items-center justify-center">
                <i :class="['text-[7rem]', icon.class]"></i>
              </div>
            </template>
            <!-- duplikasi konten untuk efek infinite -->
            <template v-for="icon in boxicons" :key="'dupe-' + icon.name">
              <div class="h-40 w-40 flex items-center justify-center">
                <i :class="['text-[7rem]', icon.class]"></i>
              </div>
            </template>
          </div>
        </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, onBeforeUnmount } from 'vue'
import axios from 'axios'

// Daftar boxicon yang ingin ditampilkan di marquee
const boxicons = [
  { name: "HTML5", class: "bx bxl-html5 text-orange-500" },
  { name: "Node.js", class: "bx bxl-nodejs text-green-600" },
  { name: "Laravel", class: "bx bxl-laravel text-red-600" },
  { name: "PostgreSQL", class: "bx bxl-postgresql text-blue-700" },
  { name: "Git", class: "bx bxl-git text-orange-700" },
  { name: "Figma", class: "bx bxl-figma text-pink-500" },
  { name: "Vue.js", class: "bx bxl-vuejs text-green-500" },
  { name: "JavaScript", class: "bx bxl-javascript text-yellow-400" },
  { name: "Tailwind CSS", class: "bx bxl-tailwind-css text-sky-400" }
]

const skills = ref([])

const categoryMap = {
  Frontend: 'Frontend',
  Backend: 'Backend',
  Tools: 'Tools & Lainnya'
}

const groupedSkills = computed(() => {
  const groups = {}
  skills.value.forEach(skill => {
    if (!groups[skill.category]) groups[skill.category] = []
    groups[skill.category].push(skill)
  })
  return groups
})

// Untuk pause marquee saat hover
const isMarqueePaused = ref(false)
const marquee = ref(null)

let marqueeFrame
let offset = 0
const speed = 1 // px per frame, adjust for desired speed

function animateMarquee() {
  if (!marquee.value) return
  if (!isMarqueePaused.value) {
    offset -= speed
    // Get the width of half the marquee (one set of icons)
    const marqueeWidth = marquee.value.scrollWidth / 2
    if (Math.abs(offset) >= marqueeWidth) {
      offset = 0
    }
    marquee.value.style.transform = `translateX(${offset}px)`
  }
  marqueeFrame = requestAnimationFrame(animateMarquee)
}

onMounted(async () => {
  try {
    const res = await axios.get('https://portofoliob-responsi.vercel.app/api/skills')
    // Tambahkan properti boxicon ke setiap skill berdasarkan mapping nama/icon
    const boxiconMap = {
      html: "bx bxl-html5 text-orange-500",
      html5: "bx bxl-html5 text-orange-500",
      nodejs: "bx bxl-nodejs text-green-600",
      laravel: "bx bxl-laravel text-red-600",
      postgresql: "bx bxl-postgresql text-blue-700",
      git: "bx bxl-git text-orange-700",
      figma: "bx bxl-figma text-pink-500",
      vue: "bx bxl-vuejs text-green-500",
      vuejs: "bx bxl-vuejs text-green-500",
      javascript: "bx bxl-javascript text-yellow-400",
      tailwind: "bx bxl-tailwind-css text-sky-400",
      tailwindcss: "bx bxl-tailwind-css text-sky-400"
    }
    skills.value = res.data.map(skill => {
      // Coba mapping dari skill.name atau skill.icon
      let key = (skill.name || '').toLowerCase().replace(/\s/g, '')
      let boxicon = boxiconMap[key]
      // fallback: coba ambil dari skill.icon (misal devicon-html5-plain)
      if (!boxicon && skill.icon) {
        const match = skill.icon.match(/devicon-([a-z0-9]+)-/)
        if (match) {
          boxicon = boxiconMap[match[1]]
        }
      }
      return { ...skill, boxicon: boxicon || "bx bx-code-alt" }
    })
  } catch (err) {
    console.error('Gagal ambil data skill:', err)
  }
  // Start marquee animation
  marqueeFrame = requestAnimationFrame(animateMarquee)
})

onBeforeUnmount(() => {
  if (marqueeFrame) cancelAnimationFrame(marqueeFrame)
})
</script>

<style scoped>
/* Hapus animasi keyframes scroll-left, karena sekarang pakai JS manual */
</style>
