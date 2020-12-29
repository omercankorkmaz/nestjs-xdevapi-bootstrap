import { IsString, IsNotEmpty, IsNumber, IsDefined } from 'class-validator';
import { Base } from 'src/base/base.model';

export class User extends Base {

    @IsString()
    @IsNotEmpty()
    @IsDefined()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    age: number;

    setAttributes(params: User) {
        this.name = params.name;
        this.age = params.age;
    }

}