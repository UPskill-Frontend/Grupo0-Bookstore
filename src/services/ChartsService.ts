import IChartsService from './interfaces/IChartsService';

export class ChartsService implements IChartsService {
    constructor(private chartsRepo: IChartsRepository = new httpChartsRepository());
}
