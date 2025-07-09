<template>
  <section
    id="profil"
    class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4 relative overflow-hidden"
  >
    <!-- Decorative Circles -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-30 -z-10 blur-2xl animate-pulse"></div>
    <div class="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full opacity-30 -z-10 blur-2xl animate-pulse"></div>
    <!-- Profile Image -->
    <img
      src="https://ui-avatars.com/api/?name=Nama+Kamu&background=4f46e5&color=fff&size=128"
      alt="Foto Profil"
      class="w-32 h-32 rounded-full shadow-lg border-4 border-white mb-6 object-cover"
    />
    <h1 class="text-4xl md:text-5xl font-extrabold mb-2 text-gray-800 text-center drop-shadow">
      Halo, Saya <span class="text-blue-600">Rizqi Zulmiazta Albar</span>
    </h1>
    <p class="text-lg md:text-xl text-gray-600 mb-4 text-center">
      <span class="inline-block bg-blue-50 px-3 py-1 rounded-full font-medium shadow-sm">
        Frontend &amp; Backend Web Developer
      </span>
    </p>
    <div class="flex space-x-4 mt-4">
      <router-link
        to="/kontak"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow transition duration-200"
      >
        Kontak Saya
      </router-link>
      <router-link
        to="/proyek"
        class="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-2 rounded-full shadow transition duration-200"
      >
        Lihat Proyek
      </router-link>
    </div>
    <!-- Social Media Icons -->
    <div class="flex space-x-5 mt-8">
      <a href="https://github.com/" target="_blank" class="text-gray-500 hover:text-gray-900 text-2xl transition">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/" target="_blank" class="text-blue-700 hover:text-blue-900 text-2xl transition">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="mailto:email@example.com" class="text-red-500 hover:text-red-700 text-2xl transition">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </section>
</template>

<!-- Add this to your main index.html or use vue-fontawesome for icons -->
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" /> -->
