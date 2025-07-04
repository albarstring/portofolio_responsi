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

<script>
export default {
  name: "Pengalaman",
  data() {
    return {
      pengalaman: [
        {
          judul: "Frontend Developer di PT. Maju Mundur",
          tanggal: "Jan 2022 - Sekarang",
          deskripsi:
            "Mengembangkan dan memelihara aplikasi web menggunakan Vue.js dan teknologi frontend lainnya.",
        },
        {
          judul: "UI/UX Designer di Kreatif Studio",
          tanggal: "Jul 2020 - Des 2021",
          deskripsi:
            "Merancang tampilan antarmuka pengguna dan pengalaman pengguna untuk berbagai aplikasi mobile dan web.",
        },
        {
          judul: "Intern Web Developer di Startup XYZ",
          tanggal: "Jan 2020 - Jun 2020",
          deskripsi:
            "Membantu tim dalam membangun fitur-fitur baru dan memperbaiki bug pada website perusahaan.",
        },
      ],
    };
  },
};
</script>
