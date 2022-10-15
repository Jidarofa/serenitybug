import { Actor, AnswersQuestions, Log, Note, Question, TakeNote, UsesAbilities } from "@serenity-js/core";
import { LastResponse } from "@serenity-js/rest";
import { Text } from "@serenity-js/webdriverio";

export const randomName = (type_name:string):string => {

        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 5; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return type_name+"_"+result;

}

export const getFecha = ():string => {
   
  let fecha= new Date();
  fecha.setDate(fecha.getDate()+30)

  return fecha.toISOString().split('T')[0]

} 

export const textWithTimestamp = (temp_compromiso:string):string => {
  Math.floor(Date.now() / 1000)
  let compromiso = temp_compromiso+"-"+Math.floor(Date.now() / 1000)
  return compromiso;
}
