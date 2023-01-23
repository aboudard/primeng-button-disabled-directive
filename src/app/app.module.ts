import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DisabDirective } from './disab.directive';
import { TooltipModule } from 'primeng/tooltip';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    TooltipModule,
    RippleModule,
  ],
  declarations: [AppComponent, DisabDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
