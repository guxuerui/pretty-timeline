<script setup lang="ts">
const router = useRouter()
const goBack = () => router.back()
</script>

<template>
  <nav text-sm mt-6>
    <div class="markdown-body cursor-pointer">
      <a @click="goBack">cd ..</a>
    </div>
    <div class="markdown-body">
      <a href="/">cd ~</a>
    </div>
  </nav>
</template>

