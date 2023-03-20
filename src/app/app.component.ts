import {
  Component
} from '@angular/core';
import { TooltipItem } from "./tooltip/models/tooltip-item.model";
import { CUSTOM_LIST } from "./tooltip/custom-list";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  _list: TooltipItem[] = CUSTOM_LIST.reverse();
  value: string = JSON.stringify(this._list);
  onTextChanged($event: string) {
    this._list = JSON.parse($event);
  }
}
