import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import {FirebaseService} from "./firebase/firebase.service";
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule,
  ],
  providers: [AuthService, LocalStrategy, FirebaseService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
