import { IsString, IsNotEmpty, IsNumber, IsDefined } from 'class-validator';
import { Base } from 'src/base/base.model';

export class Product extends Base {
    @IsString()
    @IsNotEmpty()
    @IsDefined()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @IsDefined()
    price: number;
}