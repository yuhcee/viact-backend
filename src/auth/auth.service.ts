import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {CreateUserDto} from "./auth.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,

  ) {}

  async validateUser({email, password}): Promise<any> {
      try {
          const auth = await this.usersService.auth();
          const userCredential = await auth.signInWithEmailAndPassword(email, password);
          if (!userCredential || !userCredential.user) {
            throw new UnauthorizedException();
          }
            return this.usersService.getCurrentUser()
      } catch (error) {
          throw  new BadRequestException(error.message)
      }
  }

  async login(user: any) {
    return user
  }

  async createAccount({email, password, ...rest} : CreateUserDto) {

      try {
          const auth = await this.usersService.auth();
          const userCredential = await auth.createUserWithEmailAndPassword(email, password);
          if (!userCredential || !userCredential.user) {
              throw new UnauthorizedException();
          }
          const { uid,photoURL  } = userCredential.user
          return this.usersService.create({
              ...rest, id: uid, uid,photoURL
          })
      } catch (error) {
          throw  new BadRequestException(error.message)
      }
  }
}
