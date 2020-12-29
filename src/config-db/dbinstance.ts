import { dbConfig } from './dbconfig';
const mysqlx = require('@mysql/xdevapi');

class DbInstance {

    session: any;
    schema: any;
    dbConfig: any;

    async init() {
        this.dbConfig = dbConfig;
        this.session = await mysqlx.getSession(this.dbConfig);
        this.schema = await this.session.getSchema(this.dbConfig.schema);
    }

}
const dbInstance = new DbInstance();

export default dbInstance;