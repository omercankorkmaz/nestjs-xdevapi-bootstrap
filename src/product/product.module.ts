import { Module } from '@nestjs/common';
import { ConfigEntityModule } from 'src/config-entity/config-entity.module';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    ConfigEntityModule.register({ 
      tableName: 'tableforproduct',
      collectionName: 'collectionforproduct'
    })
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
