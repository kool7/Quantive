import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  currentName: string | null = null;

  constructor(private router: Router, private http: HttpClient) { }

  tags: string[] = ['Growth', 'Digitalisation']
}
