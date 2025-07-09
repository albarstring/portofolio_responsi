<template>
  <section
    id="skill"
    class="min-h-screen flex flex-col justify-center items-center py-20 bg-gray-50"
    data-aos="fade-in"
    data-aos-duration="800"
  >
    <div class="container mx-auto px-6">
      <h2 
        class="text-3xl font-bold mb-8 text-blue-700 text-center"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        Keahlian & Teknologi
      </h2>

      <div 
        class="grid grid-cols-2 md:grid-cols-4 gap-8"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          class="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
          :data-aos="'zoom-in'"
          :data-aos-duration="600"
          :data-aos-delay="index * 100"
        >
          <div v-if="skill.icon" class="flex justify-center mb-3">
            <img
              :src="skill.icon"
              :alt="skill.name + ' icon'"
              class="w-12 h-12 object-contain"
              loading="lazy"
            />
          </div>
          <h3 class="text-xl font-bold text-gray-800">{{ skill.name }}</h3>
          <p class="text-gray-500 mt-2">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const skills = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get('https://portofoliobe-albar.up.railway.app/api/skills');
    skills.value = res.data;
  } catch (err) {
    console.error('Gagal ambil data skill:', err);
  }
});
</script>
