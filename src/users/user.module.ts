import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.sevice';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'USERVIE_SERVICE_VIETTU',
      useClass: UserService,
    },
  ],
})
export class UserModule {}
