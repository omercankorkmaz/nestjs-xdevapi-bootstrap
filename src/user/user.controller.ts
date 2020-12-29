import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Post('add')
    add(@Body() params: any): Promise<string[]> {
        return this.userService.add(params);
    }

    @Get('find')
    find(): Promise<User[]> {
        return this.userService.find();
    }

    @Get('get-one/:id')
    getOne(@Param('id') id: string): Promise<User> {
        return this.userService.getOne(id);
    }

    @Put('replace-one/:id')
    replaceOne(@Param('id') id: string, @Body() params: any): Promise<User> {
        return this.userService.replaceOne(id, params);
    }

    @Delete('remove-one/:id')
    removeOne(@Param('id') id: string): Promise<User> {
        return this.userService.removeOne(id);
    }

/*
    @Post('table')
    insertToTable(@Body() params: any): Promise<void> {
        return this.userService.validator(this.userService.insertToTable, params);
    }
*/
}
