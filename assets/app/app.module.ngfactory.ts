/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from './app.module';
import * as i2 from './app.component';
import * as i3 from './messages/messages.component.ngfactory';
import * as i4 from './auth/authentication.component.ngfactory';
import * as i5 from './app.component.ngfactory';
import * as i6 from '@angular/common';
import * as i7 from '@angular/platform-browser';
import * as i8 from '@angular/http';
import * as i9 from '@angular/forms';
import * as i10 from '@angular/router';
import * as i11 from './errors/error.service';
import * as i12 from './messages/message.service';
import * as i13 from './auth/auth.service';
import * as i14 from './messages/messages.component';
import * as i15 from './auth/authentication.component';
import * as i16 from './messages/message.module';
export const AppModuleNgFactory:i0.NgModuleFactory<i1.AppModule> = i0.ɵcmf(i1.AppModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.MessagesComponentNgFactory,i4.AuthenticationComponentNgFactory,i5.AppComponentNgFactory]],
              [3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(5120,i0.LOCALE_ID,
          i0.ɵm,[[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i6.NgLocalization,i6.NgLocaleLocalization,
          [i0.LOCALE_ID]),i0.ɵmpd(5120,i0.APP_ID,i0.ɵf,([] as any[])),i0.ɵmpd(5120,
          i0.IterableDiffers,i0.ɵk,([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,
          i0.ɵl,([] as any[])),i0.ɵmpd(4608,i7.DomSanitizer,i7.ɵe,[i7.DOCUMENT]),i0.ɵmpd(6144,
          i0.Sanitizer,(null as any),[i7.DomSanitizer]),i0.ɵmpd(4608,i7.HAMMER_GESTURE_CONFIG,
          i7.HammerGestureConfig,([] as any[])),i0.ɵmpd(5120,i7.EVENT_MANAGER_PLUGINS,
          (p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
            return [new i7.ɵDomEventsPlugin(p0_0),new i7.ɵKeyEventsPlugin(p1_0),new i7.ɵHammerGesturesPlugin(p2_0,
                p2_1)];
          },[i7.DOCUMENT,i7.DOCUMENT,i7.DOCUMENT,i7.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
          i7.EventManager,i7.EventManager,[i7.EVENT_MANAGER_PLUGINS,i0.NgZone]),i0.ɵmpd(135680,
          i7.ɵDomSharedStylesHost,i7.ɵDomSharedStylesHost,[i7.DOCUMENT]),i0.ɵmpd(4608,
          i7.ɵDomRendererFactory2,i7.ɵDomRendererFactory2,[i7.EventManager,i7.ɵDomSharedStylesHost]),
          i0.ɵmpd(6144,i0.RendererFactory2,(null as any),[i7.ɵDomRendererFactory2]),
          i0.ɵmpd(6144,i7.ɵSharedStylesHost,(null as any),[i7.ɵDomSharedStylesHost]),
          i0.ɵmpd(4608,i0.Testability,i0.Testability,[i0.NgZone]),i0.ɵmpd(4608,i7.Meta,
              i7.Meta,[i7.DOCUMENT]),i0.ɵmpd(4608,i7.Title,i7.Title,[i7.DOCUMENT]),
          i0.ɵmpd(4608,i8.BrowserXhr,i8.BrowserXhr,([] as any[])),i0.ɵmpd(4608,i8.ResponseOptions,
              i8.BaseResponseOptions,([] as any[])),i0.ɵmpd(5120,i8.XSRFStrategy,i8.ɵb,
              ([] as any[])),i0.ɵmpd(4608,i8.XHRBackend,i8.XHRBackend,[i8.BrowserXhr,
              i8.ResponseOptions,i8.XSRFStrategy]),i0.ɵmpd(4608,i8.RequestOptions,
              i8.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,i8.Http,i8.ɵc,[i8.XHRBackend,
              i8.RequestOptions]),i0.ɵmpd(4608,i9.ɵi,i9.ɵi,([] as any[])),i0.ɵmpd(5120,
              i10.ActivatedRoute,i10.ɵf,[i10.Router]),i0.ɵmpd(4608,i10.NoPreloading,
              i10.NoPreloading,([] as any[])),i0.ɵmpd(6144,i10.PreloadingStrategy,
              (null as any),[i10.NoPreloading]),i0.ɵmpd(135680,i10.RouterPreloader,
              i10.RouterPreloader,[i10.Router,i0.NgModuleFactoryLoader,i0.Compiler,
                  i0.Injector,i10.PreloadingStrategy]),i0.ɵmpd(4608,i10.PreloadAllModules,
              i10.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i10.ROUTER_INITIALIZER,
              i10.ɵi,[i10.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i10.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i11.ErrorService,i11.ErrorService,
              ([] as any[])),i0.ɵmpd(4608,i12.MessageService,i12.MessageService,[i8.Http,
              i11.ErrorService]),i0.ɵmpd(4608,i13.AuthService,i13.AuthService,[i8.Http,
              i11.ErrorService]),i0.ɵmpd(512,i6.CommonModule,i6.CommonModule,([] as any[])),
          i0.ɵmpd(1024,i0.ErrorHandler,i7.ɵa,([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,
              () => {
                return [i10.ɵb()];
              },([] as any[])),i0.ɵmpd(512,i10.ɵg,i10.ɵg,[i0.Injector]),i0.ɵmpd(1024,
              i0.APP_INITIALIZER,(p0_0:any,p0_1:any,p1_0:any) => {
                return [i7.ɵc(p0_0,p0_1),i10.ɵh(p1_0)];
              },[[2,i7.NgProbeToken],[2,i0.NgProbeToken],i10.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i7.BrowserModule,i7.BrowserModule,[[3,i7.BrowserModule]]),i0.ɵmpd(1024,
              i10.ɵa,i10.ɵd,[[3,i10.Router]]),i0.ɵmpd(512,i10.UrlSerializer,i10.DefaultUrlSerializer,
              ([] as any[])),i0.ɵmpd(512,i10.ChildrenOutletContexts,i10.ChildrenOutletContexts,
              ([] as any[])),i0.ɵmpd(256,i10.ROUTER_CONFIGURATION,{},([] as any[])),
          i0.ɵmpd(1024,i6.LocationStrategy,i10.ɵc,[i6.PlatformLocation,[2,i6.APP_BASE_HREF],
              i10.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i6.Location,i6.Location,[i6.LocationStrategy]),
          i0.ɵmpd(512,i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i10.ROUTES,() => {
            return [[{path:'',redirectTo:'/messages',pathMatch:'full'},{path:'messages',
                component:i14.MessagesComponent},{path:'auth',component:i15.AuthenticationComponent,
                loadChildren:'./auth/auth.module#AuthModule'}]];
          },([] as any[])),i0.ɵmpd(1024,i10.Router,i10.ɵe,[i0.ApplicationRef,i10.UrlSerializer,
              i10.ChildrenOutletContexts,i6.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i10.ROUTES,i10.ROUTER_CONFIGURATION,[2,i10.UrlHandlingStrategy],
              [2,i10.RouteReuseStrategy]]),i0.ɵmpd(512,i10.RouterModule,i10.RouterModule,
              [[2,i10.ɵa],[2,i10.Router]]),i0.ɵmpd(512,i8.HttpModule,i8.HttpModule,
              ([] as any[])),i0.ɵmpd(512,i9.ɵba,i9.ɵba,([] as any[])),i0.ɵmpd(512,
              i9.FormsModule,i9.FormsModule,([] as any[])),i0.ɵmpd(512,i16.MessageModule,
              i16.MessageModule,([] as any[])),i0.ɵmpd(512,i1.AppModule,i1.AppModule,
              ([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovYW5ndWxhci9zZWVkLXByb2plY3QvYXNzZXRzL2FwcC9hcHAubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Q6L2FuZ3VsYXIvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvYXBwLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
