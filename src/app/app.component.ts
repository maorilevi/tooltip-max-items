import {
  AfterViewInit,
  Component, ContentChildren,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Output, QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'test-application-work';
  private changes!: MutationObserver;
  array$!: Observable<any[]>;
  @ViewChildren('testComponent') viewChildren!: QueryList<ElementRef>;
  @ContentChildren('testComponent') contentChildren!: QueryList<ElementRef>;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<any[]>('http://localhost:3000/test').subscribe((res: any[]) => {
      this.array$ = of(res);
    });
  }
  @HostListener('change')
  onElementCreated(): void {
    console.log('change!!!')
  }

  ngAfterViewInit(): void {
    this.viewChildren.changes.subscribe(changes => {
      console.log(changes);
    })
    this.contentChildren.changes.subscribe(changes => {
      console.log(changes);

    })
  }
}
