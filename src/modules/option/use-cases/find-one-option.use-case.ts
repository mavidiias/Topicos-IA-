/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { FindOneOptionRepository } from "../repository/find-one-option.repository";

@Injectable ()
export class FindOneOptionUseCase {
    constructor(
        private readonly findOneOptionRepository: FindOneOptionRepository,
        private readonly logger: Logger,
    ) {}

    async execute(id : string) {
        try {
            const option = await this.findOneOptionRepository.findOne(id);
            return option;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}