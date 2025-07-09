<template>
  <section
    id="skill"
    class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4"
  >
    <div class="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full flex flex-col items-center">
      <h2 class="text-3xl font-bold text-purple-700 mb-2 text-center">Skill</h2>
      <p class="text-gray-600 mb-6 text-center">
        Berikut adalah beberapa keahlian utama yang saya miliki dalam pengembangan web:
      </p>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
        <div class="flex flex-col items-center">
          <span class="text-4xl text-blue-600 mb-2">
            <i class="fab fa-html5"></i>
          </span>
          <span class="font-semibold text-gray-800">HTML5</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-4xl text-blue-500 mb-2">
            <i class="fab fa-css3-alt"></i>
          </span>
          <span class="font-semibold text-gray-800">CSS3</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-4xl text-yellow-400 mb-2">
            <i class="fab fa-js-square"></i>
          </span>
          <span class="font-semibold text-gray-800">JavaScript</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-4xl text-blue-700 mb-2">
            <i class="fab fa-vuejs"></i>
          </span>
          <span class="font-semibold text-gray-800">Vue.js</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-4xl text-green-600 mb-2">
            <i class="fab fa-node-js"></i>
          </span>
          <span class="font-semibold text-gray-800">Node.js</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-4xl text-indigo-600 mb-2">
            <i class="fas fa-database"></i>
          </span>
          <span class="font-semibold text-gray-800">MySQL</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-4xl text-gray-700 mb-2">
            <i class="fab fa-git-alt"></i>
          </span>
          <span class="font-semibold text-gray-800">Git</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-4xl text-blue-400 mb-2">
            <i class="fab fa-react"></i>
          </span>
          <span class="font-semibold text-gray-800">React</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-4xl text-orange-500 mb-2">
            <i class="fab fa-laravel"></i>
          </span>
          <span class="font-semibold text-gray-800">Laravel</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const skills = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('https://portofoliobe-albar.up.railway.app/api/skills');
    skills.value = res.data
  } catch (err) {
    console.error('Gagal ambil data skill:', err)
  }
})
</script>
