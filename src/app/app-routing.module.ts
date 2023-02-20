import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadershipReportComponent } from './components/leadership-report/leadership-report.component';
import { TagDetailComponent } from './components/tag-detail/tag-detail.component';

const routes: Routes = [
  {
    path: 'report',
    component: LeadershipReportComponent,
    children: [
      {
        path: 'detail',
        component: TagDetailComponent
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/report'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
