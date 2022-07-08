import IChartsDTO from '../dtos/IChartsDTO';

export class Charts {
    private constructor(
        public title: string,
        public isbn: string,
        public authorNIF: string,
        public publisherCode: string,
        public categoryCode: string,
        public publishDate: Date,
        public sales: number
    ) {}

    public static createCharts(charts: IChartsDTO): Charts {
        if (
            charts.title &&
            charts.isbn &&
            charts.authorNIF &&
            charts.publisherCode &&
            charts.categoryCode &&
            charts.publishDate &&
            charts.sales
        ) {
            return new Charts(
                charts.title,
                charts.isbn,
                charts.authorNIF,
                charts.publisherCode,
                charts.categoryCode,
                charts.publishDate,
                charts.sales
            );
        } else {
            throw new Error("Charts fields can't be null");
        }
    }
}
