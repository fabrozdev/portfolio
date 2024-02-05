<script setup lang="ts">
import profileImg from '../assets/profile.png'
</script>

<template>
  <main class="bg-white dark:bg-gray-800 text-black dark:text-white transition-all duration-500">
    <div class="flex items-center justify-center flex-col h-[100vh] gap-4">
      <img class="w-1/5" :src="profileImg" />
      <div class="text-center">
        <h1>Hey there this is fabroz.dev Portfolio.</h1>
        <marquee behavior="scoll" direction="left" class="w-1/2">
          <div class="flex">
            <p class="uppercase">Under construction - Under construction - Under construction</p>
          </div>
        </marquee>
      </div>
    </div>
  </main>
</template>
