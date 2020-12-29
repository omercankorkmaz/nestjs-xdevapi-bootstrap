import { validate } from 'class-validator';

export class Base {
    _id?: string;

    validateObject() {
        return new Promise((resolve, reject) => {
            validate(this).then(errors => {
                if (errors.length > 0) {
                    console.log(errors);
                    reject(errors);
                } else {
                    resolve('validation succeed');
                }
            });
        });
    }
}