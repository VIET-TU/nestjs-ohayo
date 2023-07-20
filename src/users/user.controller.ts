import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.sevice';
import { UserRepository } from './user.repository';

@Controller('users')
export class UserController {
  constructor(
    @Inject('USERVIE_SERVICE_VIETTU') private readonly userService: UserService
  ) {}

  @Get(':id')
  getAllUsers(@Param('id', ParseIntPipe) id: number) {
    return [{ param: id }];
  }

  @Post()
  createUser(@Body() user: UserDto): UserDto {
    return this.userService.createUser(user);
  }
}
