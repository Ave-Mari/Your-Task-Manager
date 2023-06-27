import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            tasksList: []
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
                completed: false
            })
        },
        deleteTask: (state, taskId) => {
            let taskIndex = state.tasksList.indexOf(store.getters.thisTask(taskId));
            state.tasksList.splice(taskIndex, 1);
        }
    }

})

export default store;