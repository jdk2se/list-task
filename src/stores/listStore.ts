import { defineStore, acceptHMRUpdate } from "pinia";
import { ColorItem, ListElement, ListItem } from "../types/List";
import shuffle from "../helpers/ShuffleArray";

export const useListStore = defineStore('ListStore', {
    state: () => {
        return {
            lists: [] as ListItem[],
        };
    },
    getters: {
        randomizedListItems() {
            return (listIndex): ColorItem[] => {
                const arr = [];
                this.lists[listIndex].items.forEach((item, index) => {
                    for (let i = 0; i < item.number; i++) {
                        arr.push({
                            index,
                            color: item.color,
                        });
                    }
                });

                return shuffle(arr);
            }
        }
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
