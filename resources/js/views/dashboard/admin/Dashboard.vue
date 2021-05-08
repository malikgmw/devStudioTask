<template>
    <div class="container-fluid">

      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Tasks</h1>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3 d-flex">
          <h6 class="m-0 font-weight-bold text-primary-theme">Latest Tasks</h6>
          <div class="ml-auto">
              <button class="btn btn-info btn-sm" v-on:click.prevent="showAddNewTaskModal()"><span class="fa fa-info-plus"></span>+ Add New Task</button>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                  <td>{{index+1}}</td>
                  <td>{{task.title}}</td>
                  <td>{{task.description}}</td>
                  <td v-if="task.status == 1" class="">Completed</td>
                  <td v-if="task.status == 0">InComplete</td>
                  <td>
                    <button type="button" class="btn btn-outline-info btn-sm" v-on:click.prevent="editTask(task)"><i class="fa fa-edit"></i></button>
                    <button type="button" class="btn btn-outline-danger btn-sm" v-on:click.prevent="deleteTask(task)"><i class="fa fa-trash"></i></button>
                    <button v-if="task.status == 0" type="button" class="btn btn-outline-success btn-sm" v-on:click.prevent="completeTaskPop(task)">Complete</button>
                    <button v-if="task.status == 1" type="button" class="btn btn-outline-warning btn-sm" v-on:click.prevent="inCompleteTaskPop(task)">InComplete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    <!-- /.container-fluid -->
    <!-- add new task modal -->
    <b-modal class="tab-pane fade" ref="addTaskModal" title="Add Task" hide-footer>
        <form v-on:submit.prevent="addTask" class="pb-5">
            <div class="form-group">
                <label for="addTitle" class="form-control-label">Title</label>
                <input id="addTitle" type="text" v-model="task.title" placeholder="Enter Task" class="form-control" />
                <div class="invalid-feedback" v-if="action === 'addTask' && errors.title">{{errors.title[0]}}</div>
            </div>
            <div class="form-group">
                <label for="addDescription" class="form-control-label">Description</label>
                <textarea id="addDescription" type="text" v-model="task.description" rows="3" cols="50" placeholder="Enter Description" class="form-control" ></textarea>
                <div class="invalid-feedback" v-if="action === 'addTask' && errors.description">{{errors.description[0]}}</div>
            </div>
            <br><br>
            <button type="submit" class="btn btn-primary btn-block mt-4">Add Task</button>
        </form>
    </b-modal>
    <!-- edit task modal  -->
    <b-modal class="tab-pane fade" ref="editTaskModal" title="Update Task" hide-footer>
        <form v-on:submit.prevent="updateTask" class="pb-5">
            <div class="form-group">
                <label for="addTitle" class="form-control-label">Title</label>
                <input id="addTitle" type="text" v-model="editTaskData.title" placeholder="Enter Task" class="form-control" />
                <div class="invalid-feedback" v-if="action === 'updateTask' && errors.title">{{errors.title[0]}}</div>
            </div>
            <div class="form-group">
                <label for="addDescription" class="form-control-label">Description</label>
                <textarea id="addDescription" type="text" v-model="editTaskData.description" rows="3" cols="50" placeholder="Enter Description" class="form-control" ></textarea>
                <div class="invalid-feedback" v-if="action === 'updateTask' && errors.description">{{errors.description[0]}}</div>
            </div><br><br>
            <button type="submit" class="btn btn-primary btn-block mt-4">Update Task</button>
        </form>
    </b-modal>
    <!-- complete task modal -->
    <b-modal class="tab-pane fade" ref="completeTaskModal" title="Complete Task" hide-footer>
        <form v-on:submit.prevent="completeTask" class="pb-5">
            <div class="row">
                <div class="col-md-12">
                  <div class="form-group" >
                      Are you sure you want to complete {{completeTaskData.title}} ?
                  </div>
                </div>
            </div>
            <div class="col text-center"> 
              <button type="submit" class="btn btn-primary btn-sm mt-4">InComplete Task</button>
            </div>
        </form>
    </b-modal>
    <!-- inComplete task modal -->
    <b-modal class="tab-pane fade" ref="inCompleteTaskModal" title="InComplete Task" hide-footer>
        <form v-on:submit.prevent="inCompleteTask" class="pb-5">
            <div class="row">
                <div class="col-md-12">
                  <div class="form-group" >
                      Are you sure you want to inComplete {{inCompleteTaskData.title}} ?
                  </div>
                </div>
            </div>
            <div class="col text-center"> 
              <button type="submit" class="btn btn-primary btn-sm mt-4">InComplete Task</button>
            </div>
        </form>
    </b-modal>
    </div>
</template>
<script>
import * as taskService from "../../../services/task_service";
export default {
  name: "Dashboard",
  data() {
    return {
      task: {
        title:'',
        description:'',
      },
      editTaskData:{},
      completeTaskData:{},
      inCompleteTaskData:{},
      tasks:[],
      action:'',
      errors: {},
    }
  },
   mounted() {
     this.$store.state.isLoading = true;
      this.loadTasks();
  },
  methods: {
    addTask: async function() {
        try {
            this.errors = {};
            const formData = new FormData();
            for (let key in this.task) {
                formData.append(key, this.task[key]);
            }
            this.errors = {};
            await taskService.addTask(formData);
            this.flashMessage.info({
                message: 'Task added successfuly!',
                time: 5000
            });
            this.hideAddNewTaskModal();
        } catch (error) {
            switch (error.response.status) {
                case 422:
                    this.action = 'addTask';
                    this.errors = error.response.data.errors;
                    break;
                case 500:
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });
                    break;
                default:
                    this.flashMessage.error({
                        message: 'Some error occurred, Please try again!',
                        time: 5000
                    });
                    break;
            }
        }
    },
    loadTasks: async function() {
        try {
            const response = await taskService.loadTasks();
            this.tasks = response.data;
            this.$store.state.isLoading = false;
        } catch (error) {
            this.flashMessage.error({
                message: "Some error occurred,Please refresh!",
                time: 5000
            });

            this.$store.state.isLoading = false;
        }
    },
    editTask(task) {
      this.showEditTaskModal();
      this.editTaskData = task;
    },
    updateTask: async function () {
      try {
        this.$store.state.isLoading = true;
        this.editTaskData._method = "PUT";
        const response = await taskService.updateTask(
          this.editTaskData.id,
          this.editTaskData
          );
        this.$store.state.isLoading = false;
        this.hideEditTaskModal();
        this.flashMessage.success({
          message: "Task successfully updated.",
          time: 3000,
        });
        this.loadTasks();
        this.$store.state.isLoading = false;

      } catch (error) {
        this.$store.state.isLoading = false;
        switch (error.response.status) {
          case 422:
            this.action = 'updateTask';
            this.errors = error.response.data.errors;
            break;

          default:
            this.flashMessage.error({
              message: "Some error occurred. please try again.",
              time: 3000,
            });
            break;
        }
        this.flashMessage.error({
          message: "Some error occurred. Please try agian.",
          time: 3000,
        });
      }
    },
    completeTaskPop(task) {
      this.completeTaskData = task;
      this.showCompleteTaskModal();
    },
    completeTask: async function () {
      try {
        this.$store.state.isLoading = true;
        const response = await taskService.completeTask(this.completeTaskData);
        this.$store.state.isLoading = false;
        this.hideCompleteTaskModal();
        this.flashMessage.success({
          message: "Task Completed Successfully.",
          time: 3000,
        });
      } catch (error) {
        this.$store.state.isLoading = false;
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;

          default:
            this.flashMessage.error({
              message: "Some error occurred. please try again.",
              time: 3000,
            });
            break;
        }
        this.flashMessage.error({
          message: "Some error occurred. Please try agian.",
          time: 3000,
        });
      }
    },
    inCompleteTaskPop(task) {
      this.inCompleteTaskData = task;
      this.showInCompleteTaskModal();
    },
    inCompleteTask: async function () {
      try {
        this.$store.state.isLoading = true;
        const response = await taskService.inCompleteTask(this.inCompleteTaskData);
        this.$store.state.isLoading = false;
        this.hideInCompleteTaskModal();
        this.flashMessage.success({
          message: "Task InCompleted Successfully.",
          time: 3000,
        });
      } catch (error) {
        this.$store.state.isLoading = false;
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;

          default:
            this.flashMessage.error({
              message: "Some error occurred. please try again.",
              time: 3000,
            });
            break;
        }
        this.flashMessage.error({
          message: "Some error occurred. Please try agian.",
          time: 3000,
        });
      }
    },
    deleteTask: async function(task) {
        if (!window.confirm(`Are you sure you want to delete selected task`)) {
            return;
        }
        try {
            await taskService.deleteTask(task.id);

            this.tasks = this.tasks.filter(tas => {
                return tas.id != task.id;
            });

            this.flashMessage.success({
                message: 'Task deleted successfully!',
                time: 5000
            });
        } catch (error) {
            this.flashMessage.error({
                message: error.response.data.message,
                time: 5000
            });
        }
    },
    showAddNewTaskModal() {
      this.$refs.addTaskModal.show();
    },
    hideAddNewTaskModal() {
      this.$refs.addTaskModal.hide();
    },
    showEditTaskModal() {
      this.$refs.editTaskModal.show();
    },
    hideEditTaskModal() {
      this.$refs.editTaskModal.hide();
    },
    showCompleteTaskModal() {
      this.$refs.completeTaskModal.show();
    },
    hideCompleteTaskModal() {
      this.$refs.completeTaskModal.hide();
    },
    showInCompleteTaskModal(){
      this.$refs.inCompleteTaskModal.show();
    },
    hideInCompleteTaskModal() {
      this.$refs.inCompleteTaskModal.hide();
    }
  }
}
</script>
