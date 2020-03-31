import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData }   from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignComponent } from './view/sign/sign.component'
import { AdminComponent } from './view/admin/admin.component'
import { SignInComponent } from './view/sign-in/sign-in.component'
import { SignUpComponent } from './view/sign-up/sign-up.component'
import { NgZorroAntdModule, NZ_I18N, zh_TW } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh); 

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SignComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_TW }],
  bootstrap: [AppComponent]
})
export class AppModule { }

                                                          