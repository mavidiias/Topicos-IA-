/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { CreateOptionUseCase, DeleteOptionUseCase, ListOptionUseCase, FindOneOptionUseCase, UpdateOptionUseCase } from './use-cases';

@Injectable()
export class OptionService {
  constructor(private readonly createOptionUseCase : CreateOptionUseCase, 
    private readonly listOptionUseCase : ListOptionUseCase,
    private readonly deleteOptionUseCase : DeleteOptionUseCase,
    private readonly findOneOptionUseCase : FindOneOptionUseCase,
    private readonly updateOptionUseCase : UpdateOptionUseCase,
  ) {}
  create(CreateOptionDto: CreateOptionDto) {
    return this.createOptionUseCase.execute(CreateOptionDto);
  }

  async findAll() {
    return await this.listOptionUseCase.execute();
  }

  async findOne(id: string) {
   return await this.findOneOptionUseCase.execute(id);
}

  async update(id: string, updateOptionDto: UpdateOptionDto) {
    return await this.updateOptionUseCase.execute(id, updateOptionDto);
  }

  async remove(id: string) {
    return await this.deleteOptionUseCase.execute(id);
  }
}
