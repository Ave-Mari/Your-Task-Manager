import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            tasksList: []
        }
    },
    mutations: {
        addTask: (state, task) => {
            state.tasksList.push({
                id: Math.random().toString(16).slice(2),
                task: task,
                completed: false
            })
        }
    }

})

export default store;