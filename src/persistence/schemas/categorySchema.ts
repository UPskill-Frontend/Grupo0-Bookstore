import { Schema, model, Document } from 'mongoose';
import ICategoryPersistence from '../../dataSchema/ICategoryPersistence';

const Category = new Schema({
    categoryCode: { type: String, unique: true },
    category: { type: String, required: true },
});

const CategorySchema = model<Document & ICategoryPersistence>('Category', Category);
export { CategorySchema };
