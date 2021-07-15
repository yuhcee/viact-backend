import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {FirebaseService} from "../auth/firebase/firebase.service";
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService,FirebaseService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
