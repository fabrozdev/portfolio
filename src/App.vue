<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import darkMode from './assets/dark_mode.svg'
import lightMode from './assets/light_mode.svg'
const isDark = useDark({ disableTransition: false })
const toggleMode = useToggle(isDark)
</script>

<template>
  <header>
    <div>
      <div class="absolute top-2 right-2">
        <button
          @click="toggleMode()"
          class="bg-blue-700 text-white font-bold py-2 px-2 rounded-full transition-all duration-500"
        >
          <img :src="isDark ? lightMode : darkMode" />
        </button>
      </div>

      <!--   <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>
  <RouterView />
</template>
