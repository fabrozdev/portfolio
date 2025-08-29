<script setup lang="ts">
import profileImg from '../assets/profile.png'
const profiles = {
  linkedin: "https://www.linkedin.com/in/fabrizzio-lopez-2b0aab156/",
  medium: "https://medium.com/@fabroz.dev",
  cv: '/portfolio/fabrizzio-lopez-resume.pdf'
}
</script>

<template>
  <main class="bg-white dark:bg-gray-800 text-black dark:text-white transition-all duration-500">
    <div class="flex items-center justify-center flex-col h-[100vh] gap-4">
      <img class="w-1/5" :src="profileImg" />
      <div class="text-center">
        <h1>Hey there, this is fabroz.dev Portfolio.</h1>
        <marquee behavior="scoll" direction="left" class="w-1/2">
          <div class="flex">
            <p class="uppercase">Under construction - Under construction - Under construction</p>
          </div>
        </marquee>
      </div>
      <div class="flex flex-col text-center">
        <p>Find me on:</p>
        <div class="flex flex-row gap-2 underline underline-offset-2">
          <a :href="profiles.linkedin" target="_blank">Linkedin</a>
          <a :href="profiles.medium" target="_blank">Medium</a>
          <a :href="profiles.cv" target="_blank">Resume</a>
        </div>
      </div>
    </div>
  </main>
</template>
