<template>
    <form @submit.prevent="handleUpdate">
        <input type="text" v-model="task.title" />
        <textarea rows="3" v-model="task.description"></textarea>
        <button type="submit">Actualizar</button>
        <button @click="handleDelete()">Borrar</button>
    </form>
</template>

<script lang="ts">
import { Task } from '@/interfaces/Task'
import { deleteTask, getTaskById, updateTask } from '@/services/TaskService'
import { defineComponent, onMounted, ref, Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'


export default defineComponent({
    setup() {
        const route = useRoute()
        const router = useRouter();
        const id = route.params.id as string;
        let initTask: Task = {
            _id: '',
            title: '',
            description: '',
            done: false
        }
        const task: Ref<Task> = ref(initTask)

        //ACTUALIZAR TAREA
        const handleUpdate = async ()=>{
            await updateTask(id, task.value)
            router.push({path: '/'});
        }
        const handleDelete = async ()=>{
            const res = await deleteTask(id);
            console.log(res);
            
        }

        onMounted(async () => {
            task.value = await getTaskById(id)

        })
        return {
            task,
            handleUpdate,
            handleDelete
        }
    },
})
</script>

<style scoped>
</style>
