import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { VisitingcardComponent } from './visitingcard/visitingcard.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { PipeComponent } from './pipe/pipe.component';
import { AgePipe } from './age.pipe';
import { TitlePipe } from './title.pipe';
import { EmpCountComponent } from './emp-count/emp-count.component';
import { BasichighlightDirective } from './basichighlight.directive';
import { RendererDirective } from './renderer.directive';
import { HostlistenerDirective } from './hostlistener.directive';
import { HostbindingDirective } from './hostbinding.directive';
import { CclogoDirective } from './cclogo.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { SimplechangeComponent } from './simplechange/simplechange.component';
import { CountriesComponent } from './countries/countries.component';
import {HttpClientModule} from '@angular/common/http';
import { AccountcreateComponent } from './accountcreate/accountcreate.component';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { AccountupdateComponent } from './accountupdate/accountupdate.component';
import { AccountService } from './account.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    DatabindingComponent,
    VisitingcardComponent,
    EmpListComponent,
    PipeComponent,
    AgePipe,
    TitlePipe,
    EmpCountComponent,
    BasichighlightDirective,
    RendererDirective,
    HostlistenerDirective,
    HostbindingDirective,
    CclogoDirective,
    LifecycleComponent,
    SimplechangeComponent,
    CountriesComponent,
    AccountcreateComponent,
    AccountlistComponent,
    AccountupdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [AccountService],
  bootstrap: [FirstComponent]
})
export class AppModule { }
