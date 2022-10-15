import { by, Target } from '@serenity-js/webdriverio';

export const formDomain = {
    tfd_domain_name: () =>
        Target.the('article title').located(by.id('input-domain')),
    tfd_flow_name: () =>
        Target.the('article title').located(by.id('input-flow')),
    btn_create_domain: () =>
        Target.the('article title').located(by.xpath('//*[@class="andes-button btn-new-domain andes-button--large andes-button--loud andes-button--full-width"]')),
    err_alert: () =>
        Target.the('Alerta dominio duplicado').located(by.xpath('//*[@class="error-server"]'))
        
}

export const selectFlow = {
    drd_domain: ()=>
        Target.the('desplegar drop down domain').located(by.xpath('//*[@data-testid="domain-dropdown"]')),
    drd_selectItem: (name: string)=>
        Target.the(`Seleccionar opcion ${name}}`).located(by.xpath(`(//div[text()="${name}"])[1]`)),
    drd_flow_version: ()=>
        Target.the('desplegar drop down flow version').located(by.xpath('//*[@data-testid="version-dropdown"]')),
    drd_selectItem2: ()=>
        Target.the('Seleccionar opcion flow draft').located(by.xpath('(//div[text()="Version_QA_clone (DRAFT)"])[1]')) 
}

export const homePage = {
    opt_domain: ()=>
        Target.the('option domain home page').located(by.xpath('(//*[@class="andes-card andes-card--flat andes-card--default andes-card--padding-default"])[1]')),
    opt_canvas: ()=>
        Target.the(`option canvas home page`).located(by.xpath('(//*[@class="andes-card andes-card--flat andes-card--default andes-card--padding-default"])[2]')),
    opt_domainScopes: ()=>
        Target.the(`option canvas home page`).located(by.xpath('(//*[@class="andes-card andes-card--flat andes-card--default andes-card--padding-default"])[4]')),
    homeOption: function(item) {
        switch(item)
        {
            case 'Create new domain':
                return Target.the(`option canvas home page`).located(by.xpath('(//*[@class="andes-card andes-card--flat andes-card--default andes-card--padding-default"])[1]'))
            break

            case 'Create new flow':
                return Target.the(`option canvas home page`).located(by.xpath('(//*[@class="andes-card andes-card--flat andes-card--default andes-card--padding-default"])[2]'))
            break

            case 'Edit workflow':
                return Target.the(`option canvas home page`).located(by.xpath('(//*[@class="andes-card andes-card--flat andes-card--default andes-card--padding-default"])[3]'))
            break

            case 'Domain scopes':
                return Target.the(`option canvas home page`).located(by.xpath('(//*[@class="andes-card andes-card--flat andes-card--default andes-card--padding-default"])[4]'))
            break
        }
    },
    
    opt_example: ()=>
        Target.the(`option canvas home page`).located(by.id('btn')),
    opt_example1: ()=>
        Target.the(`option canvas home page`).located(by.id('draggable')),
    opt_example2: ()=>
        Target.the(`option canvas home page`).located(by.id('droppable')),
    logo: () =>
        Target.the('Logo UWS').located(by.xpath('//*[@data-testid="logo-custom"]')),
    elements: () =>
        Target.the('elements menu home').located(by.xpath('//*[@class="items"]')),
    menuLateral: () =>
        Target.the('elements menu home').located(by.id('menu-drawer')),
    menuItem: (name: string) =>
        Target.the('elements menu home').located(by.xpath(`//span[contains(text(),'${name}')]`)),

}

export const selectNode= {
    node_declare: ()=>
        Target.the('Move node declare').located(by.id('j_1')),
    node_process: ()=>
        Target.the('Move node declare').located(by.id('j_2')),
    node_decisor: ()=>
        Target.the('Move node declare').located(by.id('j_3')),
    node_final: ()=>
        Target.the('Move node declare').located(by.id('j_4')),
    canvas: ()=>
        Target.the('Canvas UWS').located(by.xpath('.drawing-paper .joint-paper svg')),
    nodeCanvas: (name:string, position: number)=>
        Target.the('Select node').located(by.xpath(`(//*[text()="${name}"])[${position}]`)),

    node_1: ()=>
        Target.the('Move node declare').located(by.xpath('(//*[@joint-selector="wrapper"])[3]')),

    node_2: ()=>
        Target.the('Move node declare').located(by.xpath('(//*[@joint-selector="body"])[6]')),

    node_3: ()=>
        Target.the('Move node declare').located(by.xpath('(//*[@joint-selector="body"])[5]')),

    node_Id: ()=>
        Target.the('Move node declare').located(by.xpath('(//*[@class="joint-cells-layer joint-viewport"])[2]')),

        

        

}


export const selectNodes= {
    target: ()=>
        Target.the('Move node element').located(by.id('draggable')),
    source: ()=>
        Target.the('Recibe element').located(by.id('droppable')),
}

export const listFlows= {
    drp_listFlows: ()=>
        Target.the('#actor clic en drop down lista de flujos').located(by.xpath('//*[@class="andes-dropdown__trigger andes-dropdown__trigger--no-placeholder"]')),
    lst_elementDomainFLow: (item)=>
        Target.the(`#actor selecciona el elemento numero ${item} de la lista`).located(by.xpath(`(//*[@class="andes-list__item-first-column"])[${item}]`)),
    sectionName:(value)=>
        Target.the(`#actor valida section ${value}`).located(by.xpath(`(//*[@class="andes-list__item andes-list__item--size-medium"])[${value}]`))
}


//*[@data-testid="version-dropdown"]

//export const Loc = $('//*[@class="andes-button btn-new-domain andes-button--large andes-button--loud andes-button--full-width"]').dragAndDrop({x:10,y:20})