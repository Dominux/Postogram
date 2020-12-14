import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get()
  public lol(): string {
    return 'Sup, registered guy'
  }
}
