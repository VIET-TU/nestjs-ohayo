import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';
import { Response } from 'express';

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

  // custom reponse status
  @Get('test/:slug')
  sayHello(
    @Res({ passthrough: true }) res: Response,
    @Param('slug') slug: string
  ) {
    res.status(HttpStatus.ACCEPTED);
    return {
      slug,
      hello: 'hello world',
    };
  }
}
