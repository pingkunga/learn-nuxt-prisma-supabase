<template>
    <div>
        <h1>{{ data }}</h1>
        <pre> {{ data }}</pre>

        <button @click="submit">Submit</button>
    </div>
</template>

<script setup lang="ts">
    const { data } = useFetch('/api/sample');

    //Send Request to Server 
    async function submit() {
        //ใช้ $fetch เพราะมีการ mount component จาก useFetch แล้ว
        const response = await $fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: 'Hello' })
        });
        
        console.log(response);
    }
</script>

<style scoped>

</style>