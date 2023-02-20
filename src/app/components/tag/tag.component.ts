import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'quantive-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() tagName: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute, private tagService: TagService) { }

  ngOnInit(): void {

  }

  selectTag() {
    this.tagService.currentName = this.tagName;
  }

}
