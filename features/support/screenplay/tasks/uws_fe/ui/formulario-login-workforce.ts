import { by, Target } from '@serenity-js/webdriverio';

export const loginWorkforce = {
    lbl_login:()=>
        Target.the('label login del formulario login workforce').located(by.xpath('//h3')),
    impt_username: () =>
        Target.the('imput username del formulario login workforce').located(by.id('Login_username')),
    impt_password: () =>
        Target.the('imput password del formulario login workforce').located(by.id('Login_password')),
    btn_login: () =>
        Target.the('boton login del formulario login workforce').located(by.xpath('//*[@class="ant-btn ant-btn-default ant-btn-sm"]')),        
}

export const header_workforce = {
    logo:()=>
        Target.the('imagen logo header workforce').located(by.xpath('//*[@class="logo-img logo-admin"]')),
    title: () =>
        Target.the('title header workforce').located(by.xpath('//*[@class="title"]')),
    btn_feedback: () =>
        Target.the('boton feedback header workforce').located(by.xpath('//*[@class="ant-btn ant-btn-default ant-btn-icon-only feedback-btn"]')),
    btn_notifications: () =>
        Target.the('boton notifications header workforce').located(by.xpath('//*[@class="ant-btn ant-btn-text ant-btn-icon-only"]')),
    lbl_username: () =>
        Target.the('label username header workforce').located(by.xpath('//*[@class="username"]')), 
    btn_logout: () =>
        Target.the('boton logout header workforce').located(by.xpath('//*[@class="logaction logout"]')),
    alert_loging_sucess: () =>
        Target.the('alerta login exitoso').located(by.xpath('//*[@class="ant-notification-notice ant-notification-notice-success ant-notification-notice-closable"]')),
    
}

