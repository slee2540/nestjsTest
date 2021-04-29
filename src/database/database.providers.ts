import mongoose from 'mongoose';
import { MONO_DB_CONNECTION_STRING } from '../constants';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => {
      const result = mongoose.connect(MONO_DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      result.then((res) => {
        console.log('준비 상태:', res.connection.readyState);
      });

      return result;
    },
  },
];
