import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDto } from './user.dto';
import { BaseDto } from 'src/common/base.dto';

@Controller('users')
export class UserController {
  @Get(':id')
  getAllUsers(@Param('id', ParseIntPipe) id: number) {
    return [{ param: id }];
  }

  //   @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    return UserDto.plainToInstance(user);

    // return {
    //   username: user.username,
    //   password: user.password,
    //   email: user.email,
    // };
  }
}
