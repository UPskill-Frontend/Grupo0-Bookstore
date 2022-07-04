import { Document, Schema, model } from 'mongoose';
import IPublisherPersistence from '../../dataSchema/IPublisherPersistence';

const PublisherSchema = new Schema({
    publisherCode: {
        type: String,
        index: true,
    },
    publisherName: {
        type: String,
        required: true,
    },
});

const publisherModel = model<Document & IPublisherPersistence>('Publisher', PublisherSchema);

export default publisherModel;
