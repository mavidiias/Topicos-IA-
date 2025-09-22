/* eslint-disable prettier/prettier */
import { Logger, Module } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionController } from './option.controller';
import * as UseCases from './use-cases';
import * as Repositories from './repository';
import { SharedModule } from 'src/shared/databases/shared.modules';

const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  imports: [SharedModule],
  controllers: [OptionController],
  providers: [OptionService, ...useCases, ...repositories, Logger],
})
export class OptionModule {}
