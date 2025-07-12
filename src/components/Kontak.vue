<template>
  <footer class="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-800 py-8 px-4">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="text-center md:text-left">
        <h2 class="text-xl font-bold text-white mb-1">Rizqi Zulmiazta Albar</h2>
        <p class="text-gray-300 text-sm mb-2">Portofolio &copy; {{ new Date().getFullYear() }}</p>
        <p class="text-gray-400 text-xs">Dibuat dengan <span class="text-purple-400">Vue.js</span> &amp; Tailwind CSS</p>
      </div>
      <div class="flex flex-col items-center md:items-end gap-2">
        <div class="flex space-x-4 mb-1">
          <a
            href="https://github.com/albarstring"
            target="_blank"
            rel="noopener"
            class="text-gray-400 hover:text-white text-2xl transition"
            aria-label="GitHub"
          >
            <i class='bx bxl-github'></i>
          </a>
          <a
            href="https://linkedin.com/in/rz-albar"
            target="_blank"
            rel="noopener"
            class="text-blue-400 hover:text-blue-300 text-2xl transition"
            aria-label="LinkedIn"
          >
            <i class='bx bxl-linkedin-square'></i>
          </a>
          <a
            href="mailto:rizqizulmiaztaalbar1@gmail.com"
            class="text-red-400 hover:text-red-300 text-2xl transition"
            aria-label="Email"
          >
            <i class='bx bx-envelope'></i>
          </a>
        </div>
        <div class="flex flex-col text-xs text-gray-400">
          <span>Email: <a href="mailto:rizqizulmiaztaalbar1@gmail.com" class="underline hover:text-blue-400">rizqizulmiaztaalbar1@gmail.com</a></span>
          <span>GitHub: <a href="https://github.com/albarstring" target="_blank" class="underline hover:text-white">albarstring</a></span>
          <span>LinkedIn: <a href="https://linkedin.com/in/rz-albar" target="_blank" class="underline hover:text-blue-300">rz-albar</a></span>
        </div>
      </div>
    </div>
  </footer>
</template>
