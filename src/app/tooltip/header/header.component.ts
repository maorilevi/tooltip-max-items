import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  @ViewChild('headerWrapper') headerWrapper!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  public get height(): number {
    if(!this.headerWrapper) return 0;
    return this.headerWrapper.nativeElement.offsetHeight;
  }
}
