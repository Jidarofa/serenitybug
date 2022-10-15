
// import { Task, Duration, Answerable, Interaction } from '@serenity-js/core';
// import { Click, Enter, Wait, Press, Key, isEnabled, isClickable, isSelected, Hover, ExecuteScript, Text, Target  } from '@serenity-js/webdriverio';
// import {click_onmousedown,click_onmouseup, DragAndDrop, DragAndDrop_Coodenates, move, move_coordenates, onmouse_move} from '../../interactions/interactions'
// import { Ensure, equals, includes } from '@serenity-js/assertions';

// /**
//  * This is called a "Task".
//  * Use tasks to compose a sequence of one or more activities and give them domain meaning.
//  *
//  * Here, the actor performs three activities:
//  * - enter username
//  * - enter password
//  * - click on the login button
//  *
//  * This sequence of activities together means to "log in"
//  */
 
// export const Goto = {
//     createDomain: (nombreDominio: string, puestoFlujo: string) =>
//         Task.where(`#actor se dirige a pagina para crear dominio: ${nombreDominio}`,
//             Wait.for(Duration.ofSeconds(2)),
//             Wait.until(homePage.opt_domain(), isEnabled()),
//             Wait.for(Duration.ofSeconds(1)),
//             Click.on(homePage.opt_domain()),
//             Wait.for(Duration.ofSeconds(3)),
//             Enter.theValue(nombreDominio).into(formDomain.tfd_domain_name()),
//             Wait.until(formDomain.tfd_flow_name(), isEnabled()),
//             Click.on(formDomain.tfd_flow_name()),
//             Enter.theValue(puestoFlujo).into(formDomain.tfd_flow_name()),
//             Wait.until(formDomain.btn_create_domain(), isEnabled()),
//             Click.on(formDomain.btn_create_domain()),
//             Wait.for(Duration.ofSeconds(5)),
//             Wait.until(selectFlow.drd_domain(), isEnabled()),
//             Click.on(selectFlow.drd_domain()),
//             Wait.for(Duration.ofSeconds(2)),
//         ), 
//     logo: () =>
//         Task.where(`#actor se dirige a logo home`,
//         Wait.for(Duration.ofSeconds(2)),
//         Click.on(homePage.logo()),
//         ), 

//     itemHome: (item: string) =>
//         Task.where(`#actor se dirige a item: ${item} `,
//             Wait.for(Duration.ofSeconds(2)),
//             Click.on(homePage.logo()),
//             Wait.for(Duration.ofSeconds(2)),
//             Click.on(homePage.homeOption(item)),
//         ), 

//     selectDomain: (item: string) =>
//         Task.where(`#actor se dirige a item: ${item} `,
//             Wait.for(Duration.ofSeconds(2)),
//             Click.on(listFlows.drp_listFlows()),
//             Wait.for(Duration.ofSeconds(2)),
//             Click.on(listFlows.lst_elementDomainFLow(item)),
//             Wait.for(Duration.ofSeconds(2)),
//         ), 
// }
        
// export const crearDominioRepetido= {
//     enUws: (nombreDominio: string, puestoFlujo: string) =>
//         Task.where(`#actor se dirige a pagina para crear dominio: ${nombreDominio}`,
//             Wait.for(Duration.ofSeconds(2)),
//             Wait.until(homePage.opt_domain(), isEnabled()),
//             Wait.for(Duration.ofSeconds(1)),
//             Click.on(homePage.opt_domain()),
//             Wait.for(Duration.ofSeconds(3)),
//             Enter.theValue(nombreDominio).into(formDomain.tfd_domain_name()),
//             Wait.until(formDomain.tfd_flow_name(), isEnabled()),
//             Click.on(formDomain.tfd_flow_name()),
//             Enter.theValue(puestoFlujo).into(formDomain.tfd_flow_name()),
//             Wait.until(formDomain.btn_create_domain(), isEnabled()),
//             Click.on(formDomain.btn_create_domain()),
//             Wait.for(Duration.ofSeconds(3)),
//         ),  
// }

// export const validateDomainExist = {
//     enUWS: (nombreDominio: string) =>
//         Task.where(`#actor despliega drop down de dominios y valdia que el dominio ${nombreDominio} exista`,
//             Ensure.that(Text.of(selectFlow.drd_selectItem(nombreDominio)), includes(nombreDominio)),
//         ),  
// }

// export const validarDominioRepetido = {
//     enUWS: (alert: string) =>
//         Task.where(`#actor observa alerta: ${alert}`,
//             Wait.for(Duration.ofSeconds(2)),
//             Ensure.that(Text.of(formDomain.err_alert()), includes(alert)),
//             Wait.for(Duration.ofSeconds(2)),
//         ),  
    
// }


// export const validarOpcion = {
//     enUWS: (option: string) =>
//         Task.where(`#actor observa opcion: ${option}`,
//             Wait.for(Duration.ofSeconds(2)),
//             Ensure.that(Text.of(homePage.opt_domainScopes()), includes(option)),
//             Wait.for(Duration.ofSeconds(2)),
//         ),  
    
// }

// export const Drag = {
//     selectFlow: () =>
//         Task.where(`#actor arrastra tarea a canvas`,
//             Wait.until(selectFlow.drd_domain(), isEnabled()),
//             Click.on(selectFlow.drd_domain()),
//             Wait.for(Duration.ofSeconds(1)),
//             Click.on(selectFlow.drd_selectItem("Test_QA_Reilly")),
//             // Wait.for(Duration.ofSeconds(1)),    
//             // Wait.until(selectFlow.drd_flow_version(), isEnabled()),
//             // Click.on(selectFlow.drd_flow_version()),
//             // Wait.until(selectFlow.drd_selectItem2(), isEnabled()),
//             // Click.on(selectFlow.drd_selectItem2()),
//             Wait.until(selectNode.node_declare(), isEnabled()),
//             Wait.until(selectNode.canvas(), isEnabled()),
//             DragAndDrop_Coodenates(selectNode.node_declare(), 500, -350),
//             DragAndDrop_Coodenates(selectNode.node_process(), 500, -250),
//             DragAndDrop_Coodenates(selectNode.node_decisor(), 500, -200),
//             DragAndDrop_Coodenates(selectNode.node_final(), 500, -150),
//             Wait.until(selectNode.node_3(), isClickable()),
//             Hover.over(selectNode.node_3()),
//             Wait.for(Duration.ofSeconds(3)),
//             click_onmousedown(selectNode.node_3()),
//             Wait.for(Duration.ofSeconds(3)),
//             move(selectNode.nodeCanvas("Process", 2)),
//             Wait.for(Duration.ofSeconds(10000)),
//         ),  
// }

// export const DragMove = {
//     selectFlow: () =>
//         Task.where(`#actor arrastra elemento`,
//             Wait.for(Duration.ofSeconds(3)),
//             DragAndDrop(selectNodes.target(), selectNodes.source()),
//             Wait.for(Duration.ofSeconds(5)),
//         ),  
// }

// export const clickHold = {
//     holdButton: () =>
//         Task.where(`#actor clic hold`,
//             Wait.until(homePage.opt_example1(), isEnabled()),
//             Wait.for(Duration.ofSeconds(1)),
//             //move_coordenates(homePage.opt_example1(), 10, 20),
//             click_onmousedown(homePage.opt_example1()),
//             Wait.for(Duration.ofSeconds(3)),
//             onmouse_move(homePage.opt_example2()),
//             Wait.for(Duration.ofSeconds(3)),

//         ),  
// }

// export const openMenuAndValidateElement = {

//     uws: (element: string) => 
//         Task.where(`#actor valida items dentro de menu lateral`,
//             Wait.for(Duration.ofSeconds(1)),
//             Ensure.that(Text.of(homePage.menuItem(element)), equals(element)),
//             Wait.for(Duration.ofSeconds(1)),
//             Click.on(homePage.menuItem(element))
//         )
// }

// export const validateText = {
//     uws: (element: Answerable<ElementSync>, value: string) =>
//         Task.where(`#actor valida texto`,
//             Wait.for(Duration.ofSeconds(1)),
//             Ensure.that(Text.of(element), equals(value)),
//             )
// }




