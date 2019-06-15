import { Inject, Injectable, Scope } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';

@Injectable({ scope: Scope.REQUEST })
export class Service {
  constructor(
    @Inject(CONTEXT) private readonly context,
  ) {}

  showContext() {
    console.log(this.context);
  }
}
