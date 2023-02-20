import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadershipReportComponent } from './components/leadership-report/leadership-report.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TagDetailComponent } from './components/tag-detail/tag-detail.component';
import { TagComponent } from './components/tag/tag.component';
import { TagService } from './services/tag.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LeadershipReportComponent,
    TagComponent,
    TagDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
