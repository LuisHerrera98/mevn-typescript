<template>
    <TaskDetail />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TaskDetail from '@/components/TaskDetail.vue'



export default defineComponent({
    components: {
        TaskDetail
    },
    setup() {
        return {}
    },
})
</script>

<style scoped>
</style>
