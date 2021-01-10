import { Controller, Get, Request } from '@nestjs/common';
import { Public, Roles } from './role/role.decorator';
import { AppService } from './app.service';
import { Role } from './role/role.enum';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) { }

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // testing purposes only to see if you can access anything
  @Get('profile')
  // @Roles(Role.Admin)
  getProfile(@Request() req) {
    return req.user;
  }
}
