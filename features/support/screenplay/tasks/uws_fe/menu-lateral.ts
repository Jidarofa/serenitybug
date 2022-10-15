import { Task, Duration, Answerable, Interaction, Actor } from '@serenity-js/core';
import { Click, Enter, Wait, Press, Key, isEnabled, isClickable, isSelected, Hover, ExecuteScript, Text, Target, isVisible, Attribute, LastScriptExecution  } from '@serenity-js/webdriverio';
import {click_onmousedown,click_onmouseup, DragAndDrop, DragAndDrop_Coodenates, move, move_coordenates, onmouse_move} from '../../interactions/interactions'
import { Ensure, equals, includes } from '@serenity-js/assertions';
import * as formularios from '../uws_fe/ui/formulario-login-workforce'
import * as inf_glo from '../../../global_uws/informacion_global'
import { ensure } from 'tiny-types';
import * as interactions from '../../interactions/interactions'
import { quarter_plan } from './ui/quarter-plan';
import { informacion_global } from '../../../global_uws/informacion_global';
 
export const menuLateral = {
    seleccionar_opcion_menu:(menuOption: Answerable<ElementSync>)=>
    Task.where(`#actor seleccionar opcion: menu lateral: ${menuOption}`,
        Wait.for(Duration.ofSeconds(2)),
        interactions.load_complete(),
        Wait.upTo(Duration.ofSeconds(10))
            .until(LastScriptExecution.result<string>(), equals(informacion_global.load_complete)),
        Click.on(quarter_plan.btn_menu_lateral()),
        Wait.until(quarter_plan.menu_lateral.opc_management_quarterPlan(), isClickable()),
        interactions.load_complete(),
        Wait.upTo(Duration.ofSeconds(10))
                .until(LastScriptExecution.result<string>(), equals(informacion_global.load_complete)),
            Click.on(menuOption),
            interactions.load_complete(),
        Wait.upTo(Duration.ofSeconds(10))
                .until(LastScriptExecution.result<string>(), equals(informacion_global.load_complete)),
    //Log.the(LastScriptExecution.result<string>()),

    ),
}


