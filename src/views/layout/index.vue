<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'


// 触发获取导航的action


import {useCategoryStore} from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(() => {
    categoryStore.getCategory()
})

</script>

<template>
    <link rel="stylesheet" href="//at.alicdn.com/t/font_2143783_iq6z4ey5vu.css">
    <div style="display: flex;flex-direction: column;">
        <LayoutFixed />
        <LayoutNav />
        <LayoutHeader />
        <RouterView />
        <LayoutFooter />
    </div>
</template>

<style></style>
