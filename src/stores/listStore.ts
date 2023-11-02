import { defineStore } from "pinia";
import { ListItem } from "../types/List";

export const useListStore = defineStore('ListStore', {
    state: () => {
        return {
            lists: [] as ListItem[],
        };
    },
    getters: {
    },
    actions: {
        async fill() {
            this.lists = (await import('@/data/lists.json')).default;
        }
    }
});
