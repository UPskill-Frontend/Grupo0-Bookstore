import { Document, model, Schema } from 'mongoose';
import IUserPersistence from '../../dataSchema/IUserPersistence';

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
});

const UserModel = model<Document & IUserPersistence>('User', UserSchema);
export { UserModel };
