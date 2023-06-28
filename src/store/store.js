import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            tasksList: [],
            editedTask: ''
        }
    },
    getters: {
        thisTask: (state) => (taskId) => {
            return state.tasksList.find((task) => task.id === taskId)
        },


    },
    mutations: {
        addTask: (state, task) => {
            state.tasksList.push({
                id: Math.random().toString(16).slice(2),
                task: task,
                editing: false
            })
        },
        deleteTask: (state, taskId) => {
            let taskIndex = state.tasksList.indexOf(store.getters.thisTask(taskId));
            state.tasksList.splice(taskIndex, 1);
        },
        updateTask: (state, updatedTask) => {
            let taskIndex = state.tasksList.findIndex(task => task.id === updatedTask.id);
            if (taskIndex !== -1) {
                state.tasksList[taskIndex] = updatedTask;
              }


        }
    }

})

export default store;