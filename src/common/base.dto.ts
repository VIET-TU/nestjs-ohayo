import { Expose, plainToClass } from 'class-transformer';
import { UserDto } from 'src/users/user.dto';

export abstract class BaseDto {
  //abstract class ko dung tao thuc the
  @Expose()
  id?: string;

  @Expose()
  createdAt?: Date;

  @Expose()
  updatedAt?: Date;

  static plainToInstance<T>(this: new (...args: any[]) => T, obj: T): T {
    return plainToClass(this, obj, { excludeExtraneousValues: true }); // loai bo truoc ko dc expore
  }
}
