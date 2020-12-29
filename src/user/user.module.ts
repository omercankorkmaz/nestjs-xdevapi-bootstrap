import { Module } from '@nestjs/common';
import { ConfigEntityModule } from 'src/config-entity/config-entity.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    ConfigEntityModule.register({ 
      collectionName: 'collectionforuser',
      tableName: 'tableforuser',
      tableCreatingString: '(_id SERIAL, name VARCHAR(20), age INT)'
    })
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
