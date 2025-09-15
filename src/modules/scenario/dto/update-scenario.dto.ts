/* eslint-disable prettier/prettier */
import { CreateScenarioDto } from './create-scenario.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateScenarioDto extends PartialType(CreateScenarioDto) {}