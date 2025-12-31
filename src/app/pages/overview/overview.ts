import { Component } from '@angular/core';
import { TableList } from '../../components/table-list/table-list';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-overview',
  imports: [TableList, HttpClientModule],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
})
export class Overview {

  constructor() {
  }

}
