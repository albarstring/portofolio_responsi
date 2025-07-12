
<template>
  <section
    id="pendidikan"
    class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 pt-20"
    data-aos="fade-in"
    data-aos-duration="1200"
  >
    <div 
      class="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full flex flex-col items-center"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <h2 
        class="text-3xl font-bold mb-6 text-blue-700 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >Pendidikan</h2>
      <div class="w-full space-y-8">
        <div
          v-for="(edu, index) in pendidikan"
          :key="index"
          class="pb-4 border-b border-gray-200 last:border-b-0 last:pb-0"
          :data-aos="'fade-up'"
          :data-aos-duration="1000"
          :data-aos-delay="600 + index * 150"
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
    const res = await axios.get('https://portofoliob-responsi.vercel.app/api/pendidikan');
    pendidikan.value = res.data;
  } catch (err) {
    console.error('Gagal ambil data pendidikan:', err);
  }
});
</script>
