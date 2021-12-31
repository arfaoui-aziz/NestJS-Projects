import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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

  //   @Get(':id')
  //   findOne(@Param() params) {
  //     console.log(params);
  //     return `This action return coffee with ID:  ${params.id} `;
  //   }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return coffee with ID:  ${id} `;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
