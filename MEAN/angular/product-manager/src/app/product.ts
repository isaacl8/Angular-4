export class Product { //this is the model to to make it easier to reset the form or fields after adding it or submitting it, formating the info in the services
    constructor(
        public id: number = Math.floor(Math.random() * 9999) + 1,
        public title: string = '',
        public price: number = 0,
        public imgUrl: string = null
    ) {}
}
