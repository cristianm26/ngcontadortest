import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { ButtonaddComponent } from './components/buttonadd/buttonadd.component';
import { ButtonDisComponent } from './components/button-dis/button-dis.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonaddComponent,
    ButtonDisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
