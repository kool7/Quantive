import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'quantive-leadership-report',
  templateUrl: './leadership-report.component.html',
  styleUrls: ['./leadership-report.component.scss']
})
export class LeadershipReportComponent implements OnInit {

  constructor(public tagService: TagService, public router: Router) { }

  ngOnInit(): void {
  }

}
