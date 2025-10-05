<template>
    <h1>
        Hello dashboard here! {{ user.username }}
    </h1>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()
const user = ref(null)

const getProfile = async () => {
    try {
        const res = await axios.get('http://localhost:3000/api/getProfile', {
            headers: {
                'x-auth-token': localStorage.getItem('token')
            }
        })
        user.value = res.data
        console.log("Logged-in user:", res.data)
    } catch (err) {
        console.error(err)
        //toast.error('Failed to load profile')
        router.push('/Login')
    }
}




onBeforeMount(async () => {
    await getProfile();
});


</script>