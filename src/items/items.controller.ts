import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Post()
  create(@Body() item: Item): Item {
    return this.itemsService.create(item);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Item {
    return this.itemsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() item: Item): Item {
    return this.itemsService.update(+id, item);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.itemsService.remove(+id);
  }
}