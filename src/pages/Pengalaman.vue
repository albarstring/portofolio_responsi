<template>
  <section
    id="pengalaman"
    class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4 pt-20"
  >
    <div class="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full flex flex-col items-center">
      <h2 class="text-3xl font-bold mb-6 text-blue-700 text-center">Pengalaman</h2>
      <div class="w-full space-y-8">
        <div
          v-for="(item, index) in pengalaman"
          :key="index"
          class="pb-4 border-b border-gray-200 last:border-b-0 last:pb-0"
        >
          <div class="flex justify-between items-center flex-wrap gap-2">
            <span class="font-semibold text-lg text-gray-800">{{ item.judul }}</span>
            <span class="text-gray-500 text-base">{{ item.tanggal }}</span>
          </div>
          <div class="mt-2 text-gray-600 leading-relaxed">
            {{ item.deskripsi }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const pengalaman = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/pengalaman')
    pengalaman.value = res.data
  } catch (err) {
    console.error('Gagal ambil data pengalaman:', err)
  }
})
</script>
