import { Injectable } from '@nestjs/common';
const mysqlx = require('@mysql/xdevapi');
import { Product } from './product.model';

@Injectable()
export class ProductService {

  config = {
    password: 'root',
    user: 'root',
    host: 'localhost',
    port: 33060,
    schema: 'testdb',
    collection: 'collectionforproduct',
    table: 'tableforproduct'
  };
  session;
  schema;
  table;
  collection;
  
  constructor() {
    this.starter();
  }
  
  async starter() {
    this.session = await mysqlx.getSession(this.config);
    this.schema = await this.session.getSchema(this.config.schema);

    await this.session.sql(`create table if not exists ${this.config.schema}.${this.config.table} (_id SERIAL, name VARCHAR(20), price INT)`).execute();
    this.table = await this.schema.getTable(this.config.table);
    this.collection = await this.schema.createCollection(this.config.collection, { reuseExisting: true });
  }

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
    const res = await this.collection.add(product).execute();
    return res.getGeneratedIds();
  }

  async insertToTable(params: any): Promise<void> {
    const product = new Product(params);
    return await this.table.insert('name', 'price').values(product.name, product.price).execute();
  }

}
