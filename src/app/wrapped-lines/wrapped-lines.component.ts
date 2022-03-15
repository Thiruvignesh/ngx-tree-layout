import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import 'leader-line';

declare let LeaderLine: any;

@Component({
  selector: 'app-wrapped-lines',
  templateUrl: './wrapped-lines.component.html',
  styleUrls: ['./wrapped-lines.component.css']
})
export class WrappedLinesComponent implements AfterViewInit {

  @ViewChild('wrapper') wrapperDiv!: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    let elmWrapper = this.wrapperDiv.nativeElement;
    let rectWrapper = elmWrapper.getBoundingClientRect();
    // let line1 = new LeaderLine(document.getElementById('terminal-1'),
    //   document.getElementById('terminal-2'));
    // let elmLine1 = document.querySelector('.leader-line:last-of-type');
    // let line2 = new LeaderLine(document.getElementById('terminal-3'), line1.end);
    // let elmLine2 = document.querySelector('.leader-line:last-of-type');

// Move to the origin of coordinates as the document
    this.renderer.setStyle(this.wrapperDiv.nativeElement, 'transform', 'translate(-' +
      (rectWrapper.left + scrollX) + 'px, -' + (rectWrapper.top + scrollY) + 'px)');
    // elmWrapper['style']['transform'] =
    // elmWrapper?.appendChild(elmLine1);
    // elmWrapper?.appendChild(elmLine2);

    this.drawLine('a_node', 'b_node');
    this.drawLine('a_node', 'c_node');
    this.drawLine('c_node', 'd_node');
    this.drawLine('c_node', 'e_node');

  }

  drawLine = (startElementId: string, endElementId: string) => {
    let line = new LeaderLine(
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
    let elmLine = document.querySelector('.leader-line:last-of-type');
    this.wrapperDiv.nativeElement?.appendChild(elmLine);
  }

}
