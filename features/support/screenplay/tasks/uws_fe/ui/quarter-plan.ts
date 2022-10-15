import { by, Target } from '@serenity-js/webdriverio';


const ventana_importar = {
    impt_seleccionar_archivo:()=>
        Target.the('imput seleccionar archivo').located(by.xpath('//*[@type="file"]')),
    btn_enviar:()=>
        Target.the('boton enviar').located(by.xpath('//*[text()="Enviar"]/..')),
    btn_cancelar:()=>
        Target.the('boton cancelar').located(by.xpath('//*[text()="Cancelar"]/..')),
    btn_cerrar:()=>
        Target.the('boton cerrar ventana').located(by.xpath('//*[@class="ant-modal-close-x"]/..')),
    lbl_ventana_importar: () =>
        Target.the('titulo ventana importar').located(by.xpath('//*[@class="ant-modal-content"]')),
    alert_importar_template: () =>
        Target.the('Alerta resultado importar template').located(by.xpath('//*[@class="ant-message-notice-content"]')),
}

const templates = {
    ventana_importar: ventana_importar,
    btn_importar:()=>
        Target.the('boton importar template').located(by.xpath('//*[text() = "Importar Template"]/..')),
    btn_descargar:()=>
        Target.the('boton descargar template').located(by.xpath('//*[text() = "Descargar Template"]/..')),
}

const form_compromiso_manual = {
    
    lbl_header:()=>
        Target.the('titulo formulario crear compromiso manual').located(by.xpath('//*[@class="ant-modal-header"]')),
    lbl_asignar_colaboradores:()=>
        Target.the('titulo formulario asignar colaboradores').located(by.xpath('//*[text()="Una vez creado el compromiso podrá asignarle colaboradores"]')),
    form_item:(item: string)=>
        Target.the(`item ${item} del formulario crear nuevo compromiso manual`).located(by.xpath(`(//*[text()="${item}"])[2]/../..`)),
    inpt_item:(item: string)=>
        Target.the(`item input ${item} del formulario crear nuevo compromiso manual`).located(by.id(`${item}`)),
    textarea_item:(item: string)=>
        Target.the(`item textarea ${item} del formulario crear nuevo compromiso manual`).located(by.id(`${item}`)),
    inpt_versionAsociada:()=>
        Target.the(`item input version asociada del formulario crear nuevo compromiso manual`).located(by.xpath('//*[@placeholder="Versión asociada"]')),
    btn_cancel:()=>
        Target.the('boton cancelar formulario crear compromiso manual').located(by.xpath('//*[text()="Cancel"]/..')),
    btn_submit:()=>
        Target.the('boton submit formulario crear compromiso manual').located(by.xpath('//*[text()="Submit"]/..')),
    form_nuevoCompromiso:()=>
        Target.the('formulario completo crear nuevo compromiso').located(by.xpath('//*[@class="ant-modal-body"]')),
    drp_estado:()=>
        Target.the('dropdown estado').located(by.xpath('(//*[@class="ant-tag"])[2]')),
    date_parametro:(date: string)=>
        Target.the('fecha por parametro').located(by.xpath(`//*[@title="${date}"]`)),
    date_today_inicio:()=>
        Target.the('fecha dia actual').located(by.xpath('(//*[@class="ant-picker-today-btn"])[1]')),
    date_today_fin:()=>
        Target.the('fecha dia actual').located(by.xpath('(//*[@class="ant-picker-today-btn"])[2]')),
    lst_impacto:(option:string)=>
        Target.the('opcion lista desplegable impacto').located(by.xpath(`//*[@class="ant-select-item ant-select-item-option"]//*[text()="${option}"]`)),
    lst_tipo_entregable:(option:string)=>
        Target.the('opcion lista desplegable tipo entregable').located(by.xpath(`//*[@title="${option}"]//*[text()="${option}"]`)),
    }

const acciones = {
    templates: templates,
    compromiso_manual: form_compromiso_manual,
    btn_templates:()=>
        Target.the('boton templates').located(by.xpath('//*[@data-icon="file-excel"]/../..')),
    btn_crear:()=>
        Target.the('boton crear').located(by.xpath('//*[@class="anticon anticon-plus"]/..')),

}

const filtros = {
    buscador_comrpmiso:()=>
        Target.the('compromisos buscador').located(by.xpath('//*[@class="ant-input"]')),
    drd_superBU:()=>
        Target.the('filtro compromiso por super BU').located(by.xpath('(//*[@class="ant-select ant-select-single ant-select-allow-clear ant-select-show-arrow"])[1]')),
    drd_BU:()=>
        Target.the('filtro compromiso por BU').located(by.xpath('(//*[@class="ant-select ant-select-single ant-select-allow-clear ant-select-show-arrow"])[2]')),
    drd_iniciativa:()=>
        Target.the('filtro compromiso por iniciativa').located(by.xpath('//*[@class="ant-select ant-select-multiple ant-select-allow-clear ant-select-show-search"]')),
    drd_estado:()=>
        Target.the('filtro compromiso por estado de compromiso').located(by.xpath('//*[@class="ant-select filterLeft ant-select-single ant-select-allow-clear ant-select-show-arrow"]')),
    
}


const compromisos = {
    acciones: acciones,
    filtros: filtros,
    alert_compromiso_creado_exitosamente: () =>
        Target.the('alerta compromiso creado exitosamente').located(by.xpath('//*[@class="ant-message-notice-content"]//*[text()="Successfully created."]')),
    tbl_cabecera_compromisos: () =>
        Target.the('cabecera tbla compromisos').located(by.xpath('//*[@class="//*[@class="ant-table-thead"]"]')),
    tbl_resultado_compromisos: () =>
        Target.the('resultado listado compromisos').located(by.xpath('//*[@class="ant-table-tbody"]'))
}

const menu_lateral = {
    opc_management_quarterPlan:()=>
        Target.the('opcion menu management quarter plan').located(by.id('menuItem_quarterPlan')),
    }
    
export const quarter_plan = {
    comprimisos: compromisos,
    menu_lateral: menu_lateral,
    lbl_login:()=>
        Target.the('label login del formulario login workforce').located(by.xpath('//h3')),
    impt_username: () =>
        Target.the('imput username del formulario login workforce').located(by.id('Login_username')),
    impt_password: () =>
        Target.the('imput password del formulario login workforce').located(by.id('Login_password')),
    btn_login: () =>
        Target.the('boton login del formulario login workforce').located(by.xpath('//*[@class="ant-btn ant-btn-default ant-btn-sm"]')),
    btn_menu_lateral: () =>
        Target.the('boton menu lateral').located(by.id('menu-drawer')),
}

