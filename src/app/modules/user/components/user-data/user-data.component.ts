import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {UserInterface} from '@app/interfaces';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDataComponent implements OnInit {
  @Input() user: UserInterface;

  constructor() { }

  ngOnInit() {

  }

}
