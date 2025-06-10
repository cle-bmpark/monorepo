// app.controller.ts
import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('/graphql')
  redirectToGraphQL() {
    return;
  }
}
