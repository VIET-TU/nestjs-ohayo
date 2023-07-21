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
import { Response } from 'express';
import { LoggerService } from 'src/logger/logger.service';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    @Inject('USERVIE_SERVICE_VIETTU') private readonly userService: UserService,
    private readonly logger: LoggerService
  ) {}

  @Get(':id')
  getAllUsers(@Param('id', ParseIntPipe) id: number) {
    return [{ param: id }];
  }

  @Post()
  createUser(@Body() user: UserDto): UserDto {
    this.logger.log();

    return this.userService.createUser(user);
  }

  @Get()
  test1() {
    this.logger.log();
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
