import { defineStore, acceptHMRUpdate } from "pinia";
import { ListElement, ListItem } from "../types/List";

export const useListStore = defineStore('ListStore', {
    state: () => {
        return {
            lists: [] as ListItem[],
        };
    },
    getters: {
        randomizedListItems: state => {
            return (listIndex) => {

            }
        },
    },
    actions: {
        async fill() {
            this.lists = (await import('@/data/lists.json')).default;
        },
        deleteItem(index: number, color: string) {
            const item = this.lists[index].items.find((el: ListElement) => el.color === color);
            if (item) {
                item.number = (item.number - 1 >= 0) ? item.number - 1 : 0;
            }
        },
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useListStore, import.meta.hot));
}
