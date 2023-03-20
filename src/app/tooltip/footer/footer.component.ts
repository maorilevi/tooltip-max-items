import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() text: string = '';
  @ViewChild('footerWrapper') footerWrapper!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  public get height(): number {
    if(!this.footerWrapper?.nativeElement) return 0;
    return this.footerWrapper.nativeElement.offsetHeight;
  }
}
