import { Injectable } from '@nestjs/common';
import { CreateCriterionDto } from './dto/create-criterion.dto';
import { UpdateCriterionDto } from './dto/update-criterion.dto';

@Injectable()
export class CriterionService {
  create(createCriterionDto: CreateCriterionDto) {
    return 'This action adds a new criterion';
  }

  findAll() {
    return `This action returns all criterion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} criterion`;
  }

  update(id: number, updateCriterionDto: UpdateCriterionDto) {
    return `This action updates a #${id} criterion`;
  }

  remove(id: number) {
    return `This action removes a #${id} criterion`;
  }
}
