import {Component, OnInit} from '@angular/core';
import 'leader-line';

declare let LeaderLine: any;

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  constructor() {
  }

  drawLine = (startElementId: string, endElementId: string) => {
    new LeaderLine(
      document.getElementById(startElementId),
      document.getElementById(endElementId),
      {
        color: '#3f51b5',
        size: 3,
        path: 'straight',
        startSocket: 'bottom',
        endSocket: 'top',
        endPlug: 'arrow3',
        dash: {animation: true}
      }
    );
  }

  ngOnInit(): void {
    this.drawLine('a_node', 'b_node');
    this.drawLine('a_node', 'c_node');
    this.drawLine('c_node', 'd_node');
    this.drawLine('c_node', 'e_node');
  }

}
