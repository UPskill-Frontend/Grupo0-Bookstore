import { Schema, model, Document } from 'mongoose';
import IBookPersistence from '../../dataSchema/IBookPersistence';

const Book = new Schema({
    title: { type: String },
    isbn: { type: String, index: true },
    author: { type: String },
    stock: { type: Number },
    publisherCode: { type: String },
    categoryCode: { type: String },
});

const BookSchema = model<Document & IBookPersistence>('Book', Book);
export { BookSchema };
