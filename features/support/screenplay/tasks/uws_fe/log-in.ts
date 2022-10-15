import { Task, Duration, Answerable, Interaction, Actor } from '@serenity-js/core';
import { Click, Enter, Wait, Press, Key, isEnabled, isClickable, isSelected, Hover, ExecuteScript, Text, Target, isVisible, Attribute, LastScriptExecution  } from '@serenity-js/webdriverio';
import {click_onmousedown,click_onmouseup, DragAndDrop, DragAndDrop_Coodenates, move, move_coordenates, onmouse_move} from '../../interactions/interactions'
import { Ensure, equals, includes } from '@serenity-js/assertions';
import * as formularios from '../uws_fe/ui/formulario-login-workforce'
import * as inf_glo from '../../../global_uws/informacion_global'
import { ensure } from 'tiny-types';
import * as interactions from '../../interactions/interactions'
 
export const formulario = {
    login_workforce: (username: string, password: string) =>
        Task.where(`#actor hace login en workforce`,
            Wait.for(Duration.ofSeconds(2)),
            interactions.load_complete(),
            Wait.upTo(Duration.ofSeconds(10))
                .until(LastScriptExecution.result<string>(), equals(inf_glo.informacion_global.load_complete)),
            Wait.for(Duration.ofSeconds(2)),
            Wait.until(formularios.loginWorkforce.lbl_login(), isClickable()),
            Wait.until(formularios.loginWorkforce.impt_username(), isEnabled()),
            Wait.until(formularios.loginWorkforce.impt_password(), isEnabled()),
            Wait.until(formularios.loginWorkforce.btn_login(), isClickable()),
            Enter.theValue(username).into(formularios.loginWorkforce.impt_username()),
            Wait.for(Duration.ofSeconds(1)),
            Enter.theValue(password).into(formularios.loginWorkforce.impt_password()),
            Wait.for(Duration.ofSeconds(1)),
            Click.on(formularios.loginWorkforce.btn_login()),
            Wait.for(Duration.ofSeconds(1)),
        ), 
    login_satisfactorio: (title: string, username: string ) =>
        Task.where(`#actor se loguea correctamente en workforce`,
            Wait.for(Duration.ofSeconds(2)),
            interactions.load_complete(),
            Wait.upTo(Duration.ofSeconds(10))
                    .until(LastScriptExecution.result<string>(), equals(inf_glo.informacion_global.load_complete)),
            Wait.upTo(Duration.ofSeconds(3))
                .until(formularios.header_workforce.logo(), isEnabled()),
            Wait.upTo(Duration.ofSeconds(3))
                .until(formularios.header_workforce.title(), isEnabled()), 
            Wait.upTo(Duration.ofSeconds(3))
                .until(formularios.header_workforce.btn_feedback(), isEnabled()),
            Wait.upTo(Duration.ofSeconds(3))
                .until(formularios.header_workforce.btn_notifications(), isEnabled()),
            Wait.upTo(Duration.ofSeconds(3))
                .until(formularios.header_workforce.lbl_username(), isVisible()),
            Wait.upTo(Duration.ofSeconds(3))
                .until(formularios.header_workforce.btn_logout(), isEnabled()),
            Ensure.that(Attribute.called('src').of(formularios.header_workforce.logo()), equals(inf_glo.informacion_global.logo_workforce)), 
            Ensure.that(Text.of(formularios.header_workforce.title()), equals(title)),
            Ensure.that(Text.of(formularios.header_workforce.lbl_username()), equals(username)),
            Wait.until(formularios.header_workforce.alert_loging_sucess(), isEnabled()),
            Ensure.that(Text.of(formularios.header_workforce.alert_loging_sucess()), equals(inf_glo.informacion_global.alerta_login_exitoso))   
        ), 
}


