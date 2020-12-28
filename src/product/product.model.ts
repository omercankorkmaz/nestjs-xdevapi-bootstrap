export class Product {
    _id?: string;
    name: string;
    price: number;

    constructor(parameters) {
        this.name = parameters.name;
        this.price = parameters.price;
    }
}