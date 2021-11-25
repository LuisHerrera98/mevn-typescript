<template>
  <u>
    <li v-for="(task, index) in tasks" :key="index" @click="$router.push({name: 'task-details', params: { id: task._id}})">{{ task.title }}</li>
  </u>
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { getTasks } from "@/services/TaskService";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tasks: [] as Task[]
    }
  },
  methods: {
    async loadTasks() {
      const res = await getTasks();
      this.tasks = res.data
    },
    // redirect(direction: any){
    //   this.$router.push(direction)
    // }
  },
  mounted() {
    this.loadTasks();
  },
});
</script>