import { Inject, Injectable } from '@nestjs/common';
import { ConfigEntityService } from 'src/config-entity/config-entity.service';
import { User } from './user.model';

@Injectable()
export class UserService {

    userModel: User;

    constructor(@Inject('ConfigEntityService') private readonly configEntityService: ConfigEntityService) {
        this.userModel = new User();
    }

    async add(user: User): Promise<string[]> {
        this.userModel.setAttributes(user);
        return this.userModel.validateObject().then(async () => {
            return await this.configEntityService.collection.add(user).execute().getGeneratedIds();
        }).catch(error => {
            return error;
        });
    }

    async find(): Promise<User[]> {
        let res = await this.configEntityService.collection.find().execute();
        let doc = res.fetchAll();
        return doc;
    }

    async getOne(id: string): Promise<User> { 
        return await this.configEntityService.collection.getOne(id);
    }

    async replaceOne(id: string, user: User): Promise<User> {
        this.userModel.setAttributes(user);
        return this.userModel.validateObject().then(async () => {
            return await this.configEntityService.collection.replaceOne(id, this.userModel);
        }).catch(error => {
            return error;
        });
    }

    async removeOne(id: string): Promise<User> {
        return await this.configEntityService.collection.removeOne(id);
    }

/*
    async insertToTable(): Promise<void> {
        return await this.configEntityService.table.insert('name', 'age').values(this.userModel.name, this.userModel.age).execute();
    }
*/

}
