import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'quantive-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.scss']
})
export class TagDetailComponent implements OnInit {

  @Input() name: string | null = null;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back() {
    this.location.back();
  }

}
