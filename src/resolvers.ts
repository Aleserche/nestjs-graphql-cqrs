import { Query, Resolver } from '@nestjs/graphql';
import { Service } from './some.service';
import { CommandBus } from '@nestjs/cqrs';
import { SomeCommand } from './some.command';

@Resolver()
export class Resolvers {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly service: Service,
  ) {}

  @Query()
  async some() {
    this.service.showContext();
    return 'some';
  }

  @Query()
  async bad() {
    await this.commandBus.execute(
      new SomeCommand(),
    );

    return 'bad';
  }
}
