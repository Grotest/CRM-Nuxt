<script lang="ts" setup>
import { MENU_DATA } from '~/components/layout/menuData';

    
</script>
<template>
    <div>
        <NuxtLink
         class="flex items-center py-3 px-3 rounded-lg w-full hover:bg-gray-700"
         v-for="item in MENU_DATA"
         :key='item.url'
         :to='item.url'
        >
            <Icon :name="item.icon" class="mr-3" />
            <span>{{ item.name }}</span>
        </NuxtLink>
    </div>
</template>

<style scoped>

</style>