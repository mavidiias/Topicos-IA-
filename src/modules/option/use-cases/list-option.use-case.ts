/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { ListOptionRepository } from "../repository/list-option.repository";

@Injectable ()
export class ListOptionUseCase {
    constructor(
        private readonly listOptionRepository: ListOptionRepository,
        private readonly logger: Logger,
    ) {}

    async execute() {
        try {
            const options = await this.listOptionRepository.list();
            return options;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}