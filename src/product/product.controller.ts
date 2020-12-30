import { Controller } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController extends BaseController<Product> {
    constructor(readonly productService: ProductService) {
        super(productService);
    }
}
