import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TabsPageModule } from './tabs/tabs.module';  // O TabsPageModule já importa o CriarComponent

@NgModule({
  declarations: [
    AppComponent
    // Remova o CriarComponent daqui
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TabsPageModule,  // O TabsPageModule já tem o CriarComponent
    IonicModule.forRoot({mode: "ios"}),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
