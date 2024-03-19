<script lang="ts">

</script>
<template>
    <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
        <NuxtLink to="/" class="mb-10 block">
            <NuxtImg src="/icon.png" alt="" width="150px" class="mx-auto"/>
            <button class="absolute top-2 right-3 transition-colors hover: text-primary">
                <Icon name="oi:account-login" color="white" size="22px"/>
            </button>
            <LayoutMenu />
            <UiButton>Send</UiButton>
        </NuxtLink>
        
    </aside>
</template>