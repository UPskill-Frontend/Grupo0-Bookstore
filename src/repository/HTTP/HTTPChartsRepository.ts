import axios, { AxiosResponse } from 'axios';
import IChartsPersistence from '../../dataSchema/IChartsPersistence';
import { ChartsMapper } from '../../mappers/ChartsMapper';
import IChartsRepository from '../interfaces/IChartsRepository';

export default class HTTPChartsRepository implements IChartsRepository {
    constructor(private httpRequest = axios) {}

    getTopTenSales = async () => {
        const bestSellers: AxiosResponse<IChartsPersistence[]> = await this.httpRequest.get(
            process.env.CHARTS_URL + 'api/book/top'
        );

        return bestSellers.data.map((charts) => ChartsMapper.toDomain(charts));
    };

    getNewest = async () => {
        const newest: AxiosResponse<IChartsPersistence[]> = await this.httpRequest.get(
            process.env.CHARTS_URL + 'api/book/new'
        );

        return newest.data.map((charts) => ChartsMapper.toDomain(charts));
    };
}
