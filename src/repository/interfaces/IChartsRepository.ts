import { Charts } from '../../domain/Charts';

export default interface IChartsRepository {
    getTopTenSales: () => Promise<Charts[]>;
    getNewest: () => Promise<Charts[]>;
}
