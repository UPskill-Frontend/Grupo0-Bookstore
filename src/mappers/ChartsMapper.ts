import IChartsDTO from '../dtos/IChartsDTO';
import IChartsPersistence from '../dataSchema/IChartsPersistence';
import { Charts } from '../domain/Charts';

export class ChartsMapper {
    public static toDTO(charts: Charts): IChartsDTO {
        return {
            title: charts.title,
            isbn: charts.isbn,
            authorNIF: charts.authorNIF,
            publisherCode: charts.publisherCode,
            categoryCode: charts.categoryCode,
            publishDate: charts.publishDate,
            sales: charts.sales,
        };
    }

    public static toPersistence(charts: Charts): IChartsPersistence {
        return {
            title: charts.title,
            isbn: charts.isbn,
            authorNIF: charts.authorNIF,
            publisherCode: charts.publisherCode,
            categoryCode: charts.categoryCode,
            publishDate: charts.publishDate,
            sales: charts.sales,
        };
    }

    public static toDomain(charts: IChartsDTO | IChartsPersistence): Charts {
        return Charts.createCharts(charts);
    }
}
