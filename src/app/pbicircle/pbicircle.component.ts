import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-pbicircle',
  templateUrl: './pbicircle.component.html',
  styleUrls: ['./pbicircle.component.css']
})
export class PBICircleComponent implements OnInit {
  @Input() bubbleData = {
    primaryKPI: 123.45,
    primaryUnit: 'Dollars',
    secondaryKPI: 123.45,
    secondaryUnit: 'Dollars',
    label1: 'Label',
    label2: 'Label2'
  };
  @Input() isHover: boolean = false;
  @Input() section: any = 'RSD';
  @Input() popUpReport: any;
  imgPath = "assets/Chart_Line_Up-Green.svg"


  dependantFilters = [];

  constructor() {
  }

  ngOnInit() {
  }
}
