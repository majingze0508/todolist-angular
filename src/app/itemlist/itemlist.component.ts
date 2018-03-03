import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  constructor() { }
  items: string[] = [];
  selectedItem: string;
  onSelect(item: string): void {
    this.selectedItem = item;
  }
  onAdd(): void {
    this.items.push(this.selectedItem);
  }
  onDel(): void {
    const index: number = this.items.indexOf(this.selectedItem);
    if (index !== -1) {
        this.items.splice(index, 1);
        this.selectedItem = '';
    }
  }
  ngOnInit() {
  }

}
