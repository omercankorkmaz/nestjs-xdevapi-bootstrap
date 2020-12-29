import { DynamicModule, Module } from '@nestjs/common';
import { ConfigEntityService } from './config-entity.service';

@Module({})
export class ConfigEntityModule {

  static register(entityOptions): DynamicModule {
    return {
      module: ConfigEntityModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: entityOptions
        },
        ConfigEntityService
      ],
      exports: [ConfigEntityService],
    };
  }

}
