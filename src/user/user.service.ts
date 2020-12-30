import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { ConfigEntityService } from 'src/config-entity/config-entity.service';
import { User } from './user.model';

@Injectable()
export class UserService extends BaseService<User> {
    constructor(@Inject('ConfigEntityService') readonly configEntityService: ConfigEntityService) {
        super(configEntityService);
    }
}
