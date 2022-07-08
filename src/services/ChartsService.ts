import { inject, injectable } from 'tsyringe';
import IChartsDTO from '../dtos/IChartsDTO';
import { ChartsMapper } from '../mappers/ChartsMapper';
import IChartsRepository from '../repository/interfaces/IChartsRepository';
import IChartsService from './interfaces/IChartsService';

@injectable()
export class chartsService implements IChartsService {
    constructor(@inject('ChartsRepository') private chartsRepo: IChartsRepository) {}

    getNewest = async (): Promise<IChartsDTO[]> => {
        const nCharts = await this.chartsRepo.getNewest();
        return nCharts.map((chart) => ChartsMapper.toDTO(chart));
    };

    getTopTenSales = async (): Promise<IChartsDTO[]> => {
        const tCharts = await this.chartsRepo.getTopTenSales();
        return tCharts.map((chart) => ChartsMapper.toDTO(chart));
    };
}
