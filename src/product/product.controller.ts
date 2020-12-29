import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) {
    }

    @Post('add')
    add(@Body() params: any): Promise<string[]> {
        return this.productService.add(params);
    }

    @Get('find')
    find(): Promise<Product[]> {
        return this.productService.find();
    }

    @Get('get-one/:id')
    getOne(@Param('id') id: string): Promise<Product> {
        return this.productService.getOne(id);
    }

    @Put('replace-one/:id')
    replaceOne(@Param('id') id: string, @Body() params: any): Promise<Product> {
        return this.productService.replaceOne(id, params);
    }

    @Delete('remove-one/:id')
    removeOne(@Param('id') id: string): Promise<Product> {
        return this.productService.removeOne(id);
    }

/*
    @Post('table')
    insertToTable(@Body() params: any): Promise<void> {
        return this.productService.insertToTable(params);
    }
*/
}
