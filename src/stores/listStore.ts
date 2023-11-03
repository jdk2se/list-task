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
        deleteItem(listIndex: number, index: number) {
            const item = this.lists[listIndex].items[index];
            if (item) {
                item.number = (item.number - 1 >= 0) ? item.number - 1 : 0;
            }
        },
        updateQuantity(listIndex: number, index: number, quantity: number) {
            const item = this.lists[listIndex].items[index];
            if (item) {
                item.number = quantity;
            }
        },
        changeColor(listIndex:number, index: number, color: string){
            const item = this.lists[listIndex].items[index];
            if (item) {
                item.color = color;
            }
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useListStore, import.meta.hot));
}
