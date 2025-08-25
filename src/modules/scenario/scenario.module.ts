import { Module } from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { ScenarioController } from './scenario.controller';

@Module({
  controllers: [ScenarioController],
  providers: [ScenarioService],
})
export class ScenarioModule {}
