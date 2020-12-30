import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BaseService } from './base.service';

@Controller('base')
export class BaseController<T> {

  constructor(private readonly baseService: BaseService<T>) {
  }

  @Post('add')
  add(@Body() params: any): Promise<string[]> {
      return this.baseService.add(params);
  }

  @Get('find')
  find(): Promise<T[]> {
      return this.baseService.find();
  }

  @Get('get-one/:id')
  getOne(@Param('id') id: string): Promise<T> {
      return this.baseService.getOne(id);
  }

  @Put('replace-one/:id')
  replaceOne(@Param('id') id: string, @Body() params: any): Promise<T> {
      return this.baseService.replaceOne(id, params);
  }

  @Delete('remove-one/:id')
  removeOne(@Param('id') id: string): Promise<T> {
      return this.baseService.removeOne(id);
  }
    
/*
    @Post('table')
    insertToTable(@Body() params: any): Promise<void> {
        return this.userService.validator(this.userService.insertToTable, params);
    }
*/

}
