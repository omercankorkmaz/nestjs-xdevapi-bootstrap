import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController extends BaseController<User> {
    constructor(readonly userService: UserService) {
        super(userService);
    }
}
