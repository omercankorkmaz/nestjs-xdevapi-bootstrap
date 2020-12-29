export class User {
    _id?: string;
    name: string;
    age: number;

    constructor(parameters) {
        this.name = parameters.name;
        this.age = parameters.age;
    }
}