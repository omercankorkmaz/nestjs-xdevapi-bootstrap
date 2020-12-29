import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Post('collection')
    insertToCollection(@Body() params: any): Promise<string[]> {
        return this.userService.insertToCollection(params);
    }

    @Post('table')
    insertToTable(@Body() params: any): Promise<void> {
        return this.userService.insertToTable(params);
    }

}
