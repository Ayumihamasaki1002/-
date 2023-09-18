<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'

</script>

<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/font_2143783_iq6z4ey5vu.css">
    <div style="display: flex;flex-direction: column;">
        <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
    </div>
 
</template>

<style>
</style>
