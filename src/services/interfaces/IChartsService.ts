import IChartsDTO from '../../dtos/IChartsDTO';

export default interface IChartsService {
    getTopTenSales: () => Promise<IChartsDTO[]>;
    getNewest: () => Promise<IChartsDTO[]>;
}
