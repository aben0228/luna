import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // <-- NgModel lives here
import {NGXLogger} from 'ngx-logger';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {MAT_LABEL_GLOBAL_OPTIONS} from '@angular/material';

// service
import {AllServices} from '@app/services';

import {AppRouterModule} from './router.module';
import {Pipes} from './pipes/pipes';
import {AppComponent} from './pages/app.component';
import {PagesComponents} from './pages/pages.component';
import {ElementComponents} from './elements/elements.component';
import {PageMainComponent} from '@app/pages/main/main.component';
import {PluginModules} from './plugins/plugins';
import {ChangLanWarningDialogComponent} from './elements/nav/nav.component';
import {ElementSettingComponent} from '@app/elements/setting/setting.component';
import {ReconnectDialogComponent} from '@app/elements/ssh-term/ssh-term.component';
import {AssetTreeDialogComponent, ManualPasswordDialogComponent} from './elements/connect/connect.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRouterModule,
    ToastrModule.forRoot(),
    ...PluginModules
  ],
  declarations: [
    AppComponent,
    ...Pipes,
    ...ElementComponents,
    ...PagesComponents,
  ],
  entryComponents: [
    AssetTreeDialogComponent,
    ManualPasswordDialogComponent,
    ReconnectDialogComponent,
    ChangLanWarningDialogComponent,
    PageMainComponent,
    ElementSettingComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    // {provide: LoggerConfig, useValue: {level: LoggerLevel.WARN}},
    // {provide: BrowserXhr, useClass: NgProgressBrowserXhr},
    ...AllServices,
    CookieService,
    NGXLogger,
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ]
})
export class AppModule {
}
