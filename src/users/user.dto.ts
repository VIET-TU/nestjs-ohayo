import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, Matches } from 'class-validator';
import { BaseDto } from 'src/common/base.dto';

export class UserDto extends BaseDto {
  @IsNotEmpty({ message: 'dit com me may' })
  @Expose() // can select
  username: string;

  firstName: string;

  lastName: string;

  @Expose()
  @Transform(({ obj }) => obj.firstName + ' ' + obj.lastName)
  fullName: string;

  @Expose()
  @IsNotEmpty({ message: 'dit com me may' })
  password: string;
  @IsNotEmpty()
  @Expose()
  @Matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, {
    message: 'email khong hop le',
  })
  email: string;
}
