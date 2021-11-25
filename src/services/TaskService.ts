import axios from "./axios";
import {AxiosResponse} from "axios";
import { Task } from '@/interfaces/Task'

export const getTasks = async (): Promise<AxiosResponse<Task[]>> => 
    await axios.get("/tasks");

export const createTask = async (task: Task) => 
    await axios.post("/tasks", task);

export const getTaskById = async (id: string): Promise<Task> => await axios.get<Task>(`/tasks/${id}`)
.then(res => res.data);

export const updateTask =  (id: string, task:Task) => 
     axios.put("/tasks/" + id, task);

export const deleteTask = async (id: string): Promise<AxiosResponse<Task>> =>
    await axios.delete<Task>(`/tasks/${id}`);