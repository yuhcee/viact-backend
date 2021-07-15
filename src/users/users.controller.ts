import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
  Put,
  Request,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FirebaseAuthGuard } from '../auth/firebase/firebase.guard';
import { UsersService } from './users.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { FILE_UPLOAD_DIR, fileFilter, storage } from '../shared/utils';
import { join } from 'path';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @UseGuards(FirebaseAuthGuard)
  @Get('api/me')
  async getProfile(@Request() req): Promise<{}> {
    const user = await this.userService.getUserDetails(req.user.uid);
    return { ...user, email: req.user.email };
  }

  @UseGuards(FirebaseAuthGuard)
  @Put('api/upload')
  @UseInterceptors(FileInterceptor('file', { storage, fileFilter }))
  async uploadPhoto(
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
  ): Promise<{}> {
    if (!file) {
      throw new BadRequestException('Only PNG and JPEG files are allow');
    }
    await this.userService.updateUser({
      uid: req.user.uid,
      photoUrl: file.filename,
    });
    return { message: 'upload successful' };
  }

  @Get('public/images/:uid')
  async getUserImage(@Param() params, @Res() response): Promise<void> {
    const user = await this.userService.getUserDetails(params.uid);
    if (!user || !user.photoUrl) {
      throw new NotFoundException('User Images not found');
    }
    const file = join(FILE_UPLOAD_DIR, user.photoUrl);
    response.sendFile(file);
  }
}
