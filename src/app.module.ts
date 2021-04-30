import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
import { userProviders } from './user/user.providers';
import { databaseProviders } from './database/database.providers';
import { DatabaseModule } from './database/database.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    CustomerModule,
    MoviesModule,
    UserModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    UserService,
    UserResolver,
    ...databaseProviders,
    ...userProviders,
  ],
})
export class AppModule {}
