import { Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight, Duration, Log, Note } from '@serenity-js/core';
import { by, Click, Enter, ExecuteScript, isEnabled, LastScriptExecution, Navigate, Target, Text, Wait } from '@serenity-js/webdriverio';
import {config} from '../../wdio.conf'
import * as menu from '../support/screenplay/tasks/uws_fe/menu-lateral'
import * as quarter_plan from '../support/screenplay/tasks/uws_fe/compromisos'
import * as ui_workforce  from '../support/screenplay/tasks/uws_fe/ui/quarter-plan';
import * as generalfunc from '../support/screenplay/utilities/general-functions'


// Given('que {actor} esta logueado en workforce',{timeout: 2 * 10000}, async (actor: Actor) =>
// {
//         return ImplementationPending;
// });

Given('que {actor} esta logueado',{timeout: 3 * 10000}, async (actor: Actor) =>
        actor.attemptsTo(
                Navigate.to(config.baseUrl),
                Enter.theValue('s')
                        .into(Target.the('login').located(by.id('Login_username'))),
                //Wait.for(Duration.ofSeconds(5)),
                Wait.for(Duration.ofSeconds(5)),
        )
);

When('{pronoun} se logue',{timeout: 3*1000}, async (actor: Actor) =>
        actorInTheSpotlight().attemptsTo(
                Log.the('only and example to step se logue')
        )
);

When('{pronoun} ver que carga correctamente',{timeout: 3*1000}, async (actor: Actor) =>
        actorInTheSpotlight().attemptsTo(
                Log.the('only and example to step ver que carga correctamente')
        )
);
        // actor.attemptsTo(
        //         Navigate.to('/'),
        //         //workforce.formulario.login_workforce(var_glo.variablesGlobales.usuario, var_glo.variablesGlobales.password),
        //         //workforce.formulario.login_satisfactorio(inf_glo.informacion_global.titulo_collaboirators, inf_glo.informacion_global.nombre_usuario ),
        // )



When('{pronoun} importe un template {string}',{timeout: 2 * 10000}, async (actor: Actor, document_path: string) =>
        actorInTheSpotlight().attemptsTo(
                quarter_plan.compromisos.importar_template(document_path),
                Wait.for(Duration.ofSeconds(10))
        )
);

When('{pronoun} debe observar que los compromisos fueron cargados correctamente en el sistema',{timeout: 2 * 10000}, async (actor: Actor) =>
        actorInTheSpotlight().attemptsTo(
                quarter_plan.compromisos.validar_compromisos_cargados()
        )

);

When('{pronoun} un nuevo compromiso de forma manual con los datos {string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string}',{timeout: 3 * 10000}, async (actor: Actor, iniciativa: string, compromiso: string, detalle: string, ownerCompromiso: string, estado: string, versionAsociada: string, metricaAsociada: string, estimacionImpacto: string, impacto: string, tipoEntregable: string,qAnterior: string,qSiguiente: string,linkDocumento: string) =>
         actorInTheSpotlight().attemptsTo(
                 menu.menuLateral.seleccionar_opcion_menu(ui_workforce.quarter_plan.menu_lateral.opc_management_quarterPlan()),
                 quarter_plan.compromisos.seleccionar_accion(ui_workforce.quarter_plan.comprimisos.acciones.btn_crear()),
                 quarter_plan.compromisos.crear_compromiso_manual(iniciativa, generalfunc.textWithTimestamp(compromiso), detalle, ownerCompromiso, versionAsociada, metricaAsociada, estimacionImpacto, impacto, tipoEntregable, qAnterior, qSiguiente, linkDocumento),

         )

);


Then('{pronoun} listarse el compromiso creado en la grilla',{timeout: 5 * 10000}, async (actor: Actor) =>
         actorInTheSpotlight().attemptsTo(

                quarter_plan.compromisos.validar_compromisos_cargados()
         )

);


// Then('{pronoun} debe observar que el dominio fue creado correctamente con el nombre: {string}',{timeout: 2 * 10000}, async (actor: Actor, domainName: string) =>
//         actorInTheSpotlight().attemptsTo(
//                 validateDomainExist.enUWS(domainName)
//            )
// );





