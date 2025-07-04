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
          <div v-if="proyek.gambar" class="w-full h-40 bg-gray-200">
            <img
              :src="proyek.gambar"
              :alt="proyek.nama"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex flex-col flex-1 px-4 py-4">
            <h3 class="text-lg font-semibold text-slate-800 mb-2">
              {{ proyek.nama }}
            </h3>
            <p class="text-gray-600 text-sm mb-4 flex-1">
              {{ proyek.deskripsi }}
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

<script>
export default {
  name: "Proyek",
  data() {
    return {
      proyekList: [
        {
          nama: "Aplikasi Manajemen Tugas",
          deskripsi:
            "Aplikasi web untuk mengelola tugas harian dengan fitur to-do list, reminder, dan progress tracking. Dibangun menggunakan Vue.js dan Firebase.",
          gambar:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
          link: "https://github.com/albarstring/todo-app",
        },
        {
          nama: "Website Portfolio Pribadi",
          deskripsi:
            "Website portfolio responsif untuk menampilkan profil, pengalaman, dan proyek-proyek yang pernah dikerjakan. Menggunakan Tailwind CSS dan Vue.js.",
          gambar:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
          link: "https://albarstring.github.io/portfolio",
        },
        {
          nama: "Sistem Informasi Perpustakaan",
          deskripsi:
            "Aplikasi berbasis web untuk manajemen data buku, peminjaman, dan pengembalian di perpustakaan sekolah. Backend menggunakan Laravel, frontend dengan Vue.js.",
          gambar:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
          link: "",
        },
      ],
    };
  },
};
</script>
