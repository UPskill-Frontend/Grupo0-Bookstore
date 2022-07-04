import IPublisherDTO from '../dtos/IPublisherDTO';

export default class Publisher {
    public publisherCode: string;
    public publisherName: string;
    constructor(publisherDTO: IPublisherDTO) {
        if (publisherDTO.publisherCode && publisherDTO.publisherName) {
            this.publisherCode = publisherDTO.publisherCode;
            this.publisherName = publisherDTO.publisherName;
        } else {
            throw Error('Invalid publisher data');
        }
    }
}
