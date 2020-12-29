import { Inject, Injectable } from '@nestjs/common';
const mysqlx = require('@mysql/xdevapi');
import { dbconfig } from '../../dbconfig';

@Injectable()
export class ConfigEntityService {

    session: any;
    schema: any;
    collection: any;
    table: any;

    constructor(@Inject('CONFIG_OPTIONS') private options) {
        this.options = [...this.options, dbconfig];
        this.init();
    }

    async init() {
        this.session = await mysqlx.getSession(this.options);
        this.schema = await this.session.getSchema(this.options.schema);
        this.collection = await this.schema.createCollection(this.options.collectionName, { reuseExisting: true });
        await this.session.sql(`create table if not exists ${this.options.schema}.${this.options.tableName} (_id SERIAL, name VARCHAR(20), price INT)`).execute();
        this.table = await this.schema.getTable(this.options.tableName);
    }

}
