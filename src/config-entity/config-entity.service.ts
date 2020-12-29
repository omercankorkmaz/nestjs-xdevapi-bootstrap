import { Inject, Injectable } from '@nestjs/common';
const mysqlx = require('@mysql/xdevapi');

import dbInstance from '../config-db/dbinstance';
import { dbconfig } from '../config-db/dbconfig';

@Injectable()
export class ConfigEntityService {

    config: any;
    collection: any;
    table: any;

    constructor(@Inject('CONFIG_OPTIONS') private options) {
        this.init();
    }

    async init() {
        this.collection = await dbInstance.schema.createCollection(this.options.collectionName, { reuseExisting: true });
        await dbInstance.session.sql(`create table if not exists ${dbconfig.schema}.${this.options.tableName} (_id SERIAL, name VARCHAR(20), price INT)`).execute();
        this.table = await dbInstance.schema.getTable(this.options.tableName);
    }

}
