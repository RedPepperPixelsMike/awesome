/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './error.component';
import * as i3 from './error.service';
const styles_ErrorComponent:any[] = ['.backdrop[_ngcontent-%COMP%] {\n            background-color: rgba(0, 0, 0, 0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }'];
export const RenderType_ErrorComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_ErrorComponent,data:{}});
export function View_ErrorComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),2,'div',[['class',
      'backdrop']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(278528,(null as any),0,i1.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,
          i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),i0.ɵpod(['display']),
      (_l()(),i0.ɵted((null as any),['\n'])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          31,'div',[['class','modal'],['role','dialog'],['tabindex','-1']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),i0.ɵdid(278528,
          (null as any),0,i1.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,i0.Renderer],
          {ngStyle:[0,'ngStyle']},(null as any)),i0.ɵpod(['display']),(_l()(),i0.ɵted((null as any),
          ['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),26,'div',[['class',
          'modal-dialog'],['role','document']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n        '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),23,'div',[['class','modal-content']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),8,'div',[['class','modal-header']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n                '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),2,
          'button',[['aria-label','Close'],['class','close'],['type','button']],(null as any),
          [[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.ErrorComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onErrorHandled()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          1,'span',[['aria-hidden','true']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['×'])),(_l()(),
          i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'h4',[['class','modal-title']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',''])),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',
          [['class','modal-body']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),1,'p',([] as any[]),(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['',''])),(_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵted((null as any),
          ['\n            '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),4,'div',
          [['class','modal-footer']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),
          i0.ɵeld(0,(null as any),(null as any),1,'button',[['class','btn btn-default'],
              ['type','button']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.ErrorComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onErrorHandled()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Close'])),
      (_l()(),i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵted((null as any),
          ['\n        '])),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵted((null as any),
          ['\n']))],(_ck,_v) => {
    var _co:i2.ErrorComponent = _v.component;
    const currVal_0:any = _ck(_v,2,0,_co.display);
    _ck(_v,1,0,currVal_0);
    const currVal_1:any = _ck(_v,6,0,_co.display);
    _ck(_v,5,0,currVal_1);
  },(_ck,_v) => {
    var _co:i2.ErrorComponent = _v.component;
    const currVal_2:any = ((_co.error == null)? (null as any): _co.error.title);
    _ck(_v,19,0,currVal_2);
    const currVal_3:any = ((_co.error == null)? (null as any): _co.error.message);
    _ck(_v,25,0,currVal_3);
  });
}
export function View_ErrorComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'app-error',([] as any[]),
      (null as any),(null as any),(null as any),View_ErrorComponent_0,RenderType_ErrorComponent)),
      i0.ɵdid(114688,(null as any),0,i2.ErrorComponent,[i3.ErrorService],(null as any),
          (null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const ErrorComponentNgFactory:i0.ComponentFactory<i2.ErrorComponent> = i0.ɵccf('app-error',
    i2.ErrorComponent,View_ErrorComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovYW5ndWxhci9zZWVkLXByb2plY3QvYXNzZXRzL2FwcC9lcnJvcnMvZXJyb3IuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Q6L2FuZ3VsYXIvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvZXJyb3JzL2Vycm9yLmNvbXBvbmVudC50cyIsIm5nOi8vL0Q6L2FuZ3VsYXIvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvZXJyb3JzL2Vycm9yLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovYW5ndWxhci9zZWVkLXByb2plY3QvYXNzZXRzL2FwcC9lcnJvcnMvZXJyb3IuY29tcG9uZW50LnRzLkVycm9yQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cImJhY2tkcm9wXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZGlzcGxheX1cIj48L2Rpdj5cclxuPGRpdiBjbGFzcz1cIm1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBkaXNwbGF5fVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwib25FcnJvckhhbmRsZWQoKVwiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPnt7IGVycm9yPy50aXRsZSB9fTwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+e3sgZXJyb3I/Lm1lc3NhZ2UgfX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJvbkVycm9ySGFuZGxlZCgpXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+PCEtLSAvLm1vZGFsLWNvbnRlbnQgLS0+XHJcbiAgICA8L2Rpdj48IS0tIC8ubW9kYWwtZGlhbG9nIC0tPlxyXG48L2Rpdj48IS0tIC8ubW9kYWwgLS0+IiwiPGFwcC1lcnJvcj48L2FwcC1lcnJvcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBO01BQUE7YUFBQTtxQkFBQSxnREFBc0I7TUFBdUMsdUNBQzdEO1VBQUE7VUFBQSxpRUFBQTtVQUFBO1VBQUEsOENBQStDLGNBQWlDO1VBQUEsYUFDNUU7VUFBQTtVQUFBLDhCQUEwQztNQUN0QztVQUFBO01BQTJCLG1EQUN2QjtVQUFBO1VBQUEsNENBQTBCO1VBQUEseUJBQ3RCO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBdUQ7Y0FBQTtjQUFBO1lBQUE7WUFBdkQ7VUFBQSxnQ0FBa0Y7VUFBQTtVQUFBLDhCQUF5QixzQ0FBdUI7aUJBQUEsd0NBQ2xJO1VBQUE7VUFBQSw0Q0FBd0I7VUFBQSxVQUF1QixtREFDN0M7VUFBQSxxQkFDTjtVQUFBO1VBQUEsZ0JBQXdCLHVEQUNwQjtpQkFBQTtjQUFBLDBEQUFHO1VBQUEsVUFBd0IsbURBQ3pCO1VBQUEscUJBQ047VUFBQTtVQUFBLGdCQUEwQix1REFDdEI7aUJBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBOEM7Y0FBQTtjQUFBO1lBQUE7WUFBOUM7VUFBQSxnQ0FBeUU7TUFBYyxtREFDckY7VUFBQSxpQkFDb0IsMkNBQ0w7VUFBQTs7SUFmWDtJQUF0QixXQUFzQixTQUF0QjtJQUMrQztJQUEvQyxXQUErQyxTQUEvQzs7O0lBS3dDO0lBQUE7SUFHckI7SUFBQTs7OztvQkNUbkI7TUFBQTthQUFBO1VBQUE7SUFBQTs7OzsifQ==
