import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TooltipItem } from './models/tooltip-item.model';
import { ItemComponent } from './item/item.component';
import { CUSTOM_LIST } from './custom-list';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit, AfterViewInit {
  _list: TooltipItem[] = CUSTOM_LIST.reverse();
  @ViewChildren('itemElement') itemElement!: QueryList<ItemComponent>;
  @ViewChild('listWrapper') listWrapper!: ElementRef;
  @ViewChild('headerComponent') headerComponent!: HeaderComponent;
  @ViewChild('footerComponent') footerComponent!: FooterComponent;

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
    const headerHeight = this.headerComponent.height;
    const footerHeight = this.footerComponent.height;
    const maxHeight = this.listWrapper.nativeElement.offsetHeight - (headerHeight + footerHeight);
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
  get footerText(): string {
    return `see ${this.restItems.length} more`;
  }
}
