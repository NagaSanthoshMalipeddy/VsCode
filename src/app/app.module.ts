import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { HomeComponent } from './home/home.component';
import { SquarePipe } from './square.pipe';
import { CustomPipePipe } from './custom-pipe.pipe';
import { BconverterPipe } from './bconverter.pipe';
import { WelcomePipe } from './welcome.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PipeComponent,
    CustomPipeComponent,
    HomeComponent,
    SquarePipe,
    CustomPipePipe,
    BconverterPipe,
    WelcomePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
