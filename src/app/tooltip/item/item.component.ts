import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TooltipItem } from '../models/tooltip-item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item!: TooltipItem;
  @ViewChild('itemWrapper') itemWrapper!: ElementRef;
  _hide: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  public itemHeight(): number {
    if (!!this.itemWrapper?.nativeElement) {
      return this.itemWrapper.nativeElement.offsetHeight;
    } else {
      return 0;
    }
  }
  public hide(): void{
    this._hide = true;
  }
}
