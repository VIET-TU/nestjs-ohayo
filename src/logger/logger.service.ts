import { Inject, Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.REQUEST,
})
export class LoggerService {
  count = 0;
  log(): void {
    this.count++;
    console.log(this.count);
  }
}
