<template>
  <section
    id="proyek"
    class="min-h-[60vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-20"
  >
    <div class="bg-white rounded-2xl shadow-xl p-8 max-w-4xl w-full flex flex-col items-center">
      <h2 class="text-3xl font-bold text-blue-700 mb-8 text-center">
        Proyek
      </h2>
      <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        <div
          v-for="(proyek, index) in proyekList"
          :key="index"
          class="bg-gray-50 rounded-xl shadow-md flex flex-col overflow-hidden transition-transform duration-150 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-lg"
        >
          <div v-if="proyek.image" class="w-full h-40 bg-gray-200">
            <img
              :src="proyek.image"
              :alt="proyek.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex flex-col flex-1 px-4 py-4">
            <h3 class="text-lg font-semibold text-slate-800 mb-2">
              {{ proyek.title }}
            </h3>
            <p class="text-gray-600 text-sm mb-4 flex-1">
              {{ proyek.description }}
            </p>
            <div v-if="proyek.link" class="mt-auto">
              <a
                :href="proyek.link"
                target="_blank"
                class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-sm transition-colors duration-150"
              >
                Lihat Proyek
                <i class="fas fa-external-link-alt ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const proyekList = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get('https://portofoliobe-albar.up.railway.app/api/proyek');
    proyekList.value = res.data;
  } catch (err) {
    console.error('Gagal ambil data proyek:', err);
  }
});
</script>

