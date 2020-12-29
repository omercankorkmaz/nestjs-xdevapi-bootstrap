import { Module } from '@nestjs/common';
import { ConfigEntityModule } from 'src/config-entity/config-entity.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    ConfigEntityModule.register({ 
      collectionName: 'collectionforproduct',
      tableName: 'tableforproduct',
      tableCreatingString: '(_id SERIAL, name VARCHAR(20), price INT)'
    })
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
