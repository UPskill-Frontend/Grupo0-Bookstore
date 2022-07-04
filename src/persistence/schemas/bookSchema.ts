import { Schema, model } from 'mongoose';

const Book = new Schema({
    title: { type: String },
    isbn: { type: String, index: true },
    author: { type: String },
    stock: { type: Number },
    publisherCode: { type: String },
    categoryCode: { type: String },
});

const BookSchema = model('Book', Book);
export { BookSchema };
