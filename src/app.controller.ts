import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('pages/index')
  root() {
    const data = {
      message: this.appService.getHello(),
      data: {
        employee: {
          name: 'sonoo',
          salary: 56000,
          married: true,
        },
      },
    };

    return {
      data: JSON.stringify(data), // Serialize 'data' object to JSON string so we can set to window._PAGE_DATA
    };
  }

  @Get('/about')
  About(@Res() res: Response) {
    const data = {
      message: this.appService.getHello(),
      data: {
        employee: {
          name: 'sonoo',
          salary: 56000,
          married: true,
        },
      },
    };

    return res.render('pages/about', {
      data: JSON.stringify(data), // Serialize 'data' object to JSON string so we can set to window._PAGE_DATA
    });
  }
}
