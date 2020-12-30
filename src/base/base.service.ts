import { Injectable } from '@nestjs/common';
import { ConfigEntityService } from 'src/config-entity/config-entity.service';

@Injectable()
export class BaseService<T> {

  model;
  configEntityService;

  constructor(configEntityService: ConfigEntityService) {
    let model: typeof configEntityService.model = configEntityService.model;
    this.configEntityService = configEntityService;
    this.model = model;
  }

  async insertToCollection(params: any): Promise<string[]> {
    this.model.setAttributes(params);
    return this.model.validateObject().then(async () => {
        return await this.configEntityService.collection.add(this.model).execute().getGeneratedIds();
    }).catch(error => {
        return error;
    });  
  }

  async add(object: T): Promise<string[]> {
    this.model.setAttributes(object);
    return this.model.validateObject().then(async () => {
        return await this.configEntityService.collection.add(object).execute().getGeneratedIds();
    }).catch(error => {
        return error;
    });
  }

  async find(): Promise<T[]> {
    let res = await this.configEntityService.collection.find().execute();
    let doc = res.fetchAll();
    return doc;
  }

  async getOne(id: string): Promise<T> { 
    return await this.configEntityService.collection.getOne(id);
  }

  async replaceOne(id: string, object: T): Promise<T> {
    this.model.setAttributes(object);
    return this.model.validateObject().then(async () => {
        return await this.configEntityService.collection.replaceOne(id, this.model);
    }).catch(error => {
        return error;
    });
  }

  async removeOne(id: string): Promise<T> {
    return await this.configEntityService.collection.removeOne(id);
  }

/*
    async insertToTable(): Promise<void> {
        return await this.configEntityService.table.insert('name', 'age').values(this.userModel.name, this.userModel.age).execute();
    }
*/

}
