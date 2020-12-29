import { Inject, Injectable } from '@nestjs/common';
import { ConfigEntityService } from 'src/config-entity/config-entity.service';
import { User } from './user.model';

@Injectable()
export class UserService {

    constructor(@Inject('ConfigEntityService') private readonly configEntityService: ConfigEntityService) {}

    async insertToCollection(params: any): Promise<string[]> {
        const user = new User(params);
        const res = await this.configEntityService.collection.add(user).execute();
        return res.getGeneratedIds();
    }

    async insertToTable(params: any): Promise<void> {
        const user = new User(params);
        return await this.configEntityService.table.insert('name', 'age').values(user.name, user.age).execute();
      }

}
