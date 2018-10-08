import { Injectable } from '@angular/core';

declare const PNotify: any;
declare const $: any;

@Injectable()
export class CommonService {

  constructor() {
  }

  public static ErrorMessage(message = 'Sorry, Something went wrong, kindly try again later') {
    // tslint:disable-next-line:no-unused-expression
    new PNotify({
      title: message,
      addclass: 'bg-danger stack-up-right',
      animate: {
        animate: true,
        in_class: 'rotateOut',
        out_class: 'UpRight'
      }
    });
  }

  public static AnimateButtonWhileCallApi(btn) {
    $(btn).append('<i class="icon-spinner2 spinner" ></i>').addClass('disabled dim');
  }

  public static DisableAnimateButtonWhileCallApi(btn) {
    $(btn).removeClass('disabled dim');
    $(btn).children('.icon-spinner2.spinner').remove();
  }

  public static SuccessMessage(title = '', text = '') {
    // tslint:disable-next-line:no-unused-expression
    new PNotify({
      title: title,
      text: text,
      addclass: 'stack-up-right bg-success',
      animate: {
        animate: true,
        in_class: 'rotateOut',
        out_class: 'UpRight'
      }
    });
  }
}
