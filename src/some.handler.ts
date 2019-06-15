import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SomeCommand } from './some.command';
import { Service } from './some.service';

@CommandHandler(SomeCommand)
export class SomeHandler implements ICommandHandler<SomeCommand> {
  constructor(
    private readonly service: Service,
  ) {}
  async execute(command: SomeCommand) {
    this.service.showContext();

    return {};
  }
}
