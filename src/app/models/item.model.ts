export class Item {
    constructor(
        public name: string,
        public date: Date,
        public complete: boolean,
        public id?: number,
        public taskType: string = 'personal',
    ) {}
}