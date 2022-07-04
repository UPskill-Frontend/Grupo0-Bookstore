import { Schema, model } from 'mongoose';

const Category = new Schema({
    categoryCode: { type: String, index: true },
    category: { type: String, required: true },
});

const CategorySchema = model('Category', Category);
export { CategorySchema };
