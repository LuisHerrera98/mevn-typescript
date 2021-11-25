<template>
    <TaskForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskForm from '@/components/TaskForm.vue'



export default defineComponent({
    components: {
        TaskForm
    },
    setup() {
        return {}
    },
})
</script>

<style scoped>
</style>
