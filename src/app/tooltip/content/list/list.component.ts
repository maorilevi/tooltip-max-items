import { AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { TooltipItem } from '../../models/tooltip-item.model';
import { ItemComponent } from './item/item.component';
import { CUSTOM_LIST } from './custom-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {
  _list: TooltipItem[] = CUSTOM_LIST;
  @ViewChildren('itemElement') itemElement!: QueryList<ItemComponent>;
  @Input() set list(value: TooltipItem[]) {
    this._list = value;
    this.srcList = value;
  }

  private srcList: TooltipItem[] = [];
  restItems: TooltipItem[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const maxHeight = 300;
    let countHeight = 0;
    const validArr: TooltipItem[] = [];
    this.restItems = [];
    this.itemElement.forEach((item: ItemComponent) => {
      countHeight += item.itemHeight();
      if (countHeight <= maxHeight) {
        validArr.push(item.item);
      } else {
        this.restItems.push(item.item);
      }
    });
    this._list = [...validArr];
  }

}