import { Module } from '@nestjs/common';
import { ConfigEntityModule } from 'src/config-entity/config-entity.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    ConfigEntityModule.register({ 
      tableName: 'tableforuser',
      collectionName: 'collectionforuser'
    })
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
