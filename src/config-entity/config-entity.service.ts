import { Inject, Injectable } from '@nestjs/common';

import dbInstance from '../config-db/dbinstance';

@Injectable()
export class ConfigEntityService {

    config: any;
    collection: any;
    table: any;
    model;

    constructor(@Inject('CONFIG_OPTIONS') private options) {
        this.model = this.options.model;
        this.init();
    }

    async init() {
        this.collection = await dbInstance.schema.createCollection(this.options.collectionName, { reuseExisting: true });
        await dbInstance.session.sql(`create table if not exists ${dbInstance.dbConfig.schema}.${this.options.tableName} ${this.options.tableCreatingString}`).execute();
        this.table = await dbInstance.schema.getTable(this.options.tableName);
    }

}
