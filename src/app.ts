import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GraphQLModule } from '@nestjs/graphql';
import { Resolvers } from './resolvers';
import { Service } from './some.service';
import { SomeHandler } from './some.handler';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({
        ...req,
      }),
    }),
    CqrsModule,
  ],
  providers: [
    Resolvers,
    Service,
    SomeHandler,
  ],
})
export class ApplicationModule {}
