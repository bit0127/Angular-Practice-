import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepicker,MatButtonModule,MatMenuModule,MatSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipePipe } from './sqrt-pipe.pipe';
import { RcomponentComponent } from './rcomponent/rcomponent.component';
import {MyServiceService} from './my-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    SqrtPipePipe,
    RcomponentComponent
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  
	  RouterModule.forRoot([
         {
            path: 'new-cmp',
            component: NewCmpComponent
         },
		 {
			 path:'rcomponent',
			 component:RcomponentComponent
		 }
      ])
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
