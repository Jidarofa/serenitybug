import { Task, Duration, Answerable, Interaction, Actor, Log, Check } from '@serenity-js/core';
import { Click, Enter, Wait, Press, Key, isEnabled, isClickable, isSelected, Hover, ExecuteScript, Text, Target, isVisible, Attribute, LastScriptExecution  } from '@serenity-js/webdriverio';
import * as interactions from '../../interactions/interactions'
import { contain, Ensure, equals, includes } from '@serenity-js/assertions';
import {quarter_plan} from '../uws_fe/ui/quarter-plan';
import { text } from 'stream/consumers';
import {informacion_global} from '../../../global_uws/informacion_global'
import { variablesGlobales } from '../../../global_uws/global-variables';
import * as generalfunc from '../../utilities/general-functions'


/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 *
 * Here, the actor performs three activities:
 * - enter username
 * - enter password
 * - click on the login button
 *
 * This sequence of activities together means to "log in"
 */
 
export const compromisos = {
    importar_template: (filedir: string) =>
        Task.where(`#actor importa un archivo .csv`,
        Wait.for(Duration.ofSeconds(2)),
        interactions.load_complete(),
        //Log.the(LastScriptExecution.result<string>()),
        Wait.upTo(Duration.ofSeconds(10))
                .until(LastScriptExecution.result<string>(), equals(informacion_global.load_complete)),
        Wait.upTo(Duration.ofSeconds(3))
             .until(quarter_plan.comprimisos.acciones.btn_templates(), isEnabled()),
        Click.on(quarter_plan.comprimisos.acciones.btn_templates()),
        Wait.upTo(Duration.ofSeconds(3))
             .until(quarter_plan.comprimisos.acciones.templates.btn_importar(), isEnabled()),
        Wait.for(Duration.ofSeconds(2)),
        Click.on(quarter_plan.comprimisos.acciones.templates.btn_importar()),
        Wait.upTo(Duration.ofSeconds(3))
             .until(quarter_plan.comprimisos.acciones.templates.ventana_importar.impt_seleccionar_archivo(), isEnabled()),
        Wait.for(Duration.ofSeconds(2)),
        Ensure.that(Text.of(quarter_plan.comprimisos.acciones.templates.ventana_importar.lbl_ventana_importar()), equals(informacion_global.ventana_importar_template)),
        Ensure.that(Attribute.called('disabled').of(quarter_plan.comprimisos.acciones.templates.ventana_importar.btn_enviar()), equals('')),
        interactions.uploadFile(quarter_plan.comprimisos.acciones.templates.ventana_importar.impt_seleccionar_archivo(), filedir),
        Wait.upTo(Duration.ofSeconds(10))
            .until(Text.of(quarter_plan.comprimisos.acciones.templates.ventana_importar.alert_importar_template()), includes(informacion_global.alerta_importar_template)),
        Ensure.that(quarter_plan.comprimisos.acciones.templates.ventana_importar.btn_cancelar(), isEnabled()),
        Click.on(quarter_plan.comprimisos.acciones.templates.ventana_importar.btn_enviar())
        ),

    validar_compromisos_cargados: () =>
        Task.where(`#actor se dirige a compromisos para validar si la data fue cargada correctamente en el sistema`,
        Wait.upTo(Duration.ofSeconds(10))    
            .until(quarter_plan.comprimisos.alert_compromiso_creado_exitosamente(),isEnabled()),
        Ensure.that(Text.of(quarter_plan.comprimisos.alert_compromiso_creado_exitosamente()), equals(informacion_global.alerta_creacion_compromiso_exitoso)),
        Wait.until(quarter_plan.comprimisos.filtros.buscador_comrpmiso(), isEnabled()),
        Enter.theValue().into(quarter_plan.comprimisos.filtros.buscador_comrpmiso()),
        Wait.for(Duration.ofSeconds(2))

        ),
    
    seleccionar_accion:(accion: Answerable<ElementSync>)=>
        Task.where(`#actor selecciona accion: ${accion}`,
            interactions.load_complete(),
            Wait.upTo(Duration.ofSeconds(10))
                .until(LastScriptExecution.result<string>(), equals(informacion_global.load_complete)),
            Wait.upTo(Duration.ofSeconds(10))
                .until(accion, isClickable()),
            Wait.until(accion, isClickable()),
            Click.on(accion),
            Wait.for(Duration.ofSeconds(1)),
            interactions.load_complete(),
            Wait.upTo(Duration.ofSeconds(10))
                .until(LastScriptExecution.result<string>(), equals(informacion_global.load_complete)),

    ),

    crear_compromiso_manual: (iniciatva:string, compromiso:string, detalle:string, ownerCompromiso:string, versionAsociada:string, metricaAsociada:string, estimacionImpacto:string, impacto:string, tipoEntregable:string, qAnterior:string, qSiguiente:string, linkDocumento:string) =>
        Task.where(`#actor crea un nuevo compromiso manualmente`,
            interactions.load_complete(),
            Wait.upTo(Duration.ofSeconds(10))
                .until(LastScriptExecution.result<string>(), equals(informacion_global.load_complete)),
            Ensure.that(Text.of(quarter_plan.comprimisos.acciones.compromiso_manual.lbl_header()), equals(informacion_global.crear_compromiso_manual.header)),
            Ensure.that(Text.of(quarter_plan.comprimisos.acciones.compromiso_manual.form_nuevoCompromiso()), equals(informacion_global.crear_compromiso_manual.texto_formulario)),         
            //seleccionar iniciativa
            Click.on(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_iniciativa.inpt_id)), 
            Enter.theValue(iniciatva).into(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_iniciativa.inpt_id)),
            Wait.for(Duration.ofSeconds(2)),
            Press.the(Key.Enter).in(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_iniciativa.inpt_id)),
            //nombre compromiso
            Enter.theValue(compromiso).into(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_compromiso.inpt_id)),
            Wait.for(Duration.ofSeconds(2)),
            //detalle compromiso
            Enter.theValue(detalle).into(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_detalle.textArea_id)),
            Wait.for(Duration.ofSeconds(2)),
            //seleccionar owner
            Click.on(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_ownerCompromiso.inpt_id)), 
            Enter.theValue(ownerCompromiso).into(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_ownerCompromiso.inpt_id)),
            Wait.for(Duration.ofSeconds(2)),
            Press.the(Key.Enter).in(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_ownerCompromiso.inpt_id)),
            //seleccionar estado
            Click.on(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_estado.inpt_id)), 
            Wait.for(Duration.ofSeconds(1)),
            Click.on(quarter_plan.comprimisos.acciones.compromiso_manual.drp_estado()),
            //versionasociada
            Enter.theValue(versionAsociada).into(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_versionAsociada.inpt_id)),
            Wait.for(Duration.ofSeconds(2)),
            //seleccionar fecha inicio
            Click.on(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_fechaInicio.inpt_id)), 
            Wait.for(Duration.ofSeconds(3)),
            Wait.until(quarter_plan.comprimisos.acciones.compromiso_manual.date_today_inicio(), isClickable()),
            Click.on(quarter_plan.comprimisos.acciones.compromiso_manual.date_today_inicio()),
            //seleccionar fecha fin
            Click.on(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_fechaFin.inpt_id)), 
            Wait.for(Duration.ofSeconds(3)),
            Wait.until(quarter_plan.comprimisos.acciones.compromiso_manual.date_today_fin(), isClickable()),
            Click.on(quarter_plan.comprimisos.acciones.compromiso_manual.date_today_fin()),
            //metrica asociada
            Enter.theValue(metricaAsociada).into(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_metricaAsociada.inpt_id)),
            Wait.for(Duration.ofSeconds(2)),
            //estimacion impacto
            Enter.theValue(estimacionImpacto).into(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_impactoMetrica.textArea_id)),
            Wait.for(Duration.ofSeconds(2)),
            //impacto
            Click.on(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_Impacto.inpt_id)),
            Wait.for(Duration.ofSeconds(2)),
            Click.on(quarter_plan.comprimisos.acciones.compromiso_manual.lst_impacto(impacto)),
            //Tipo de entregable
            Click.on(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_tipoEntregable.inpt_id)),
            Wait.for(Duration.ofSeconds(2)),
            Click.on(quarter_plan.comprimisos.acciones.compromiso_manual.lst_tipo_entregable(tipoEntregable)),
            Check.whether(qAnterior, equals('si'))
                .andIfSo(
            Click.on(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_extendioQAnterior.btn_id)),
            Wait.for(Duration.ofSeconds(1))),
            Check.whether(qSiguiente, equals('si'))
                .andIfSo(
                        Click.on(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_extendioQSiguiente.btn_id)),
                        Wait.for(Duration.ofSeconds(1))),
            Enter.theValue(linkDocumento).into(quarter_plan.comprimisos.acciones.compromiso_manual.inpt_item(variablesGlobales.campo_docuAdicional.inpt_id)),
            Wait.until(quarter_plan.comprimisos.acciones.compromiso_manual.btn_submit(), isClickable()),
            Click.on(quarter_plan.comprimisos.acciones.compromiso_manual.btn_submit())
            ),
}


