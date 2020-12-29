import { dbconfig } from './dbconfig';
const mysqlx = require('@mysql/xdevapi');

class DbInstance {

    session: any;
    schema: any;

    async init() {
        this.session = await mysqlx.getSession(dbconfig);
        this.schema = await this.session.getSchema(dbconfig.schema);
    }

}
const dbInstance = new DbInstance();

export default dbInstance;