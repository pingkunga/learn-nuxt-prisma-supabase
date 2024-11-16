<template>
    <div>
        <h1>{{ data }}</h1>
        <pre> {{ data }}</pre>
    </div>
</template>

<script setup lang="ts">
const { data } = useFetch('/api/sample');
</script>

<style scoped>

</style>