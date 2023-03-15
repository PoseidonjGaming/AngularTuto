import { Component } from '@angular/core';
import { SortOrder } from '../../models/sortOrderPipe'

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent {
  tab: string[]=["test","test1","test2","test3","test4","test5","test6","test7","test","test1","test2","test3","test4","test5","test6","test7"]
  order?:SortOrder;

}
