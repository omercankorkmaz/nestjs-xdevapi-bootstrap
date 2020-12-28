import { Body, Controller, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) {
    }

    @Post('collection')
    insertToCollection(@Body() params: any): Promise<string[]> {
        return this.productService.insertToCollection(params);
    }

    @Post('table')
    insertToTable(@Body() params: any): Promise<void> {
        return this.productService.insertToTable(params);
    }

}
