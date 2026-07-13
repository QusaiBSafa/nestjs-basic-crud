import { Injectable } from '@nestjs/common';
import { Item } from './item.interface';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  create(item: Item): Item {
    this.items.push(item);
    return item;
  }

  findOne(id: number): Item {
    return this.items.find(item => item.id === id);
  }

  update(id: number, updatedItem: Item): Item {
    const index = this.items.findIndex(item => item.id === id);
    this.items[index] = updatedItem;
    return updatedItem;
  }

  remove(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}