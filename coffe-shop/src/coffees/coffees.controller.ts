import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(): string {
    return 'This action returns all coffees';
  }

  @Get('flavors')
  findAllFlavors(): string {
    return 'This action returns all coffees Flavors';
  }
}
