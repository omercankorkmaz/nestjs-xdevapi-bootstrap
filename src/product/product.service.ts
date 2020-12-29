import { Inject, Injectable } from '@nestjs/common';
import { doc } from 'prettier';
import { ConfigEntityService } from 'src/config-entity/config-entity.service';
const mysqlx = require('@mysql/xdevapi');
import { Product } from './product.model';

@Injectable()
export class ProductService {

  productModel: Product;
  
  constructor(@Inject('ConfigEntityService') private readonly configEntityService: ConfigEntityService) {
    this.productModel = new Product();
  }
  
  async insertToCollection(params: any): Promise<string[]> {
    this.productModel.setAttributes(params);
    return this.productModel.validateObject().then(async () => {
        return await this.configEntityService.collection.add(this.productModel).execute().getGeneratedIds();
    }).catch(error => {
        return error;
    });  
  }

  async add(product: Product): Promise<string[]> {
    this.productModel.setAttributes(product);
    return this.productModel.validateObject().then(async () => {
        return await this.configEntityService.collection.add(product).execute().getGeneratedIds();
    }).catch(error => {
        return error;
    });
}

async find(): Promise<Product[]> {
    let res = await this.configEntityService.collection.find().execute();
    let doc = res.fetchAll();
    return doc;
}

async getOne(id: string): Promise<Product> { 
    return await this.configEntityService.collection.getOne(id);
}

async replaceOne(id: string, product: Product): Promise<Product> {
    this.productModel.setAttributes(product);
    return this.productModel.validateObject().then(async () => {
        return await this.configEntityService.collection.replaceOne(id, this.productModel);
    }).catch(error => {
        return error;
    });
}

async removeOne(id: string): Promise<Product> {
    return await this.configEntityService.collection.removeOne(id);
}

/*
  async insertToTable(params: any): Promise<void> {
    this.productModel.setAttributes(params);
    return this.productModel.validateObject().then(async () => {
        return await this.configEntityService.table.insert('name', 'price').values(this.productModel.name, this.productModel.price).execute();
    }).catch(error => {
        return error;
    });  
  }
*/
}
