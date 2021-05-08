import {http, httpFile} from './http_service';

export function addTask(data) {
    return http().post('/admin/tasks', data);
}
export function loadTasks(type) {
    return http().get('/admin/tasks');
}
export function updateTask(id, data) {
    return http().post(`/admin/tasks/${id}`, data);
}
export function deleteTask(id) {
    return http().delete(`/admin/tasks/${id}`);
}
export function completeTask(data) {
    return http().post("/admin/complete-task", data);
}
export function inCompleteTask(data) {
    return http().post("/admin/inComplete-task", data);
}
