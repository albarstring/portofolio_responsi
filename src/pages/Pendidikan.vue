
<template>
  <section
    id="pendidikan"
    class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 pt-20"
  >
    <div class="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full flex flex-col items-center">
      <h2 class="text-3xl font-bold mb-6 text-blue-700 text-center">Pendidikan</h2>
      <div class="w-full space-y-8">
        <div
          v-for="(edu, index) in pendidikan"
          :key="index"
          class="pb-4 border-b border-gray-200 last:border-b-0 last:pb-0"
        >
          <div class="flex justify-between items-center flex-wrap gap-2">
            <span class="font-semibold text-lg text-gray-800">{{ edu.institution }}</span>
            <span class="text-gray-500 text-base">{{ edu.period }}</span>
          </div>
          <div class="mt-1 italic text-blue-700/80">{{ edu.major }}</div>
          <div class="mt-2 text-gray-600 leading-relaxed">
            <!-- Bisa tambahkan deskripsi jika tersedia -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const pendidikan = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/pendidikan');
    pendidikan.value = res.data;
  } catch (err) {
    console.error('Gagal ambil data pendidikan:', err);
  }
});
</script>
