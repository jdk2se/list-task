export interface ListElement {
    color: string;
    number: number;
}

export interface ListItem {
    title: string;
    items: ListElement[];
}

export interface ColorItem {
    color: string;
    index: number;
}
