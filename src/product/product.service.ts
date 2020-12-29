import { Inject, Injectable } from '@nestjs/common';
import { ConfigEntityService } from 'src/config-entity/config-entity.service';
const mysqlx = require('@mysql/xdevapi');
import { Product } from './product.model';

@Injectable()
export class ProductService {
  
  constructor(@Inject('ConfigEntityService') private readonly configEntityService: ConfigEntityService) {}

  /*
    collection.add()
    collection.find()
    collection.modify()
    collection.remove()
    collection.getOne()
    collection.removeOne()
  */
  
  async insertToCollection(params: any): Promise<string[]> {
    const product = new Product(params);
    const res = await this.configEntityService.collection.add(product).execute();
    return res.getGeneratedIds();
  }

  async insertToTable(params: any): Promise<void> {
    const product = new Product(params);
    return await this.configEntityService.table.insert('name', 'price').values(product.name, product.price).execute();
  }

}
