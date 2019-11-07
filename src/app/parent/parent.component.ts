import { Component, OnInit,ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent, {static: true}) quillEditorComponentInstance; 
  mychild:ChildComponent;

  onaddmychild(){
    console.log("da goi ham");
    this.mychild.value + 1;
    
  }

  constructor() { }

  ngOnInit() {
  }

}
