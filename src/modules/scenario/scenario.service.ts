/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase, DeleteScenarioUseCase, ListScenarioUseCase, FindOneScenarioUseCase, UpdateScenarioUseCase } from './use-cases';

@Injectable()
export class ScenarioService {
  constructor(private readonly createScenarioUseCase : CreateScenarioUseCase, 
    private readonly listScenarioUseCase : ListScenarioUseCase,
    private readonly deleteScenarioUseCase : DeleteScenarioUseCase,
    private readonly findOneScenarioUseCase : FindOneScenarioUseCase,
    private readonly updateScenarioUseCase : UpdateScenarioUseCase,
  ) {}
  create(CreateScenarioDto: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(CreateScenarioDto);
  }

  async findAll() {
    return await this.listScenarioUseCase.execute();
  }

  async findOne(id: string) {
   return await this.findOneScenarioUseCase.execute(id);
}

  async update(id: string, updateScenarioDto: UpdateScenarioDto) {
    return await this.updateScenarioUseCase.execute(id, updateScenarioDto);
  }

  async remove(id: string) {
    return await this.deleteScenarioUseCase.execute(id);
  }
}
