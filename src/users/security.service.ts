import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class SecurityService {
  constructor(
    @Inject(forwardRef(() => 'USERVIE_SERVICE_VIETTU'))
    private readonly userService: UserService
  ) {}

  getSecuritySevice() {
    this.userService.getLoggoer();
  }
}
