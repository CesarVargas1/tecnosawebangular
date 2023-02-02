import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { ProductosinternosComponent } from './components/productosinternos/productosinternos.component';
import { NuestrosproductosComponent } from './components/nuestrosproductos/nuestrosproductos.component';
import { CtainfoComponent } from './components/ctainfo/ctainfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ContactComponent,
    FooterComponent,
    FaqComponent,
    ProductosinternosComponent,
    NuestrosproductosComponent,
    CtainfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
