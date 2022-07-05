import { Schema, model, Document } from 'mongoose';
import IAuthorPersistence from '../../dataSchema/IAuthorPersistence';

const Author = new Schema({
    name: { type: String },
    nif: { type: String, required: true, unique: true },
});

const AuthorSchema = model<Document & IAuthorPersistence>('Author', Author);
export { AuthorSchema };
