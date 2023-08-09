import { defineStore } from "pinia"

export const userStore = defineStore('users', {
    state: () => {
        return {
            names: [] as string[],
        }
    },

    actions: {
        addUser(user: string) {
            this.names.push(user);
        }
    } 
})