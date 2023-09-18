<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'

</script>

<template>
    <div style="display: flex;flex-direction: column;">
        <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
    </div>
 
</template>

<style>
</style>
