import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ConfigEntityService } from 'src/config-entity/config-entity.service';
import { Product } from './product.model';

@Injectable()
export class ProductService extends BaseService<Product> {
    constructor(@Inject('ConfigEntityService') readonly configEntityService: ConfigEntityService) {
        super(configEntityService);
    }
}
