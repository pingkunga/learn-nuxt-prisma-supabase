<template>
    <div>
        <h1>{{ data }}</h1>
        <pre> {{ data }}</pre>

        <p><button @click="submit">Submit</button></p>

        <p><button @click="getCookie">Get Cookie</button></p>
        <p>{{ cookieValue }}</p>
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

    const cookieValue = ref('');

    //Get Cookie
    function getCookie() {
        const cookies = document.cookie;
        console.log("server side cookie", cookies);

        cookieValue.value = cookies.includes('exampleToken') ? 'Cookie Found' : 'Cookie Not Found';
    }
</script>

<style scoped>

</style>