import { Answerable, Interaction } from "@serenity-js/core";
import { Click, Enter, Wait, Press, Key, isEnabled, isClickable, isSelected, Hover, ExecuteScript  } from "@serenity-js/webdriverio";
import { Element } from 'webdriverio';
import * as path from 'path'


export const DragAndDrop = (source: Answerable<Element<'async'>>, destination: Answerable<Element<'async'>>) =>
        Interaction.where(`#actor drags ${ source } onto ${ destination }`,  async actor => {
        const sourceElement = await actor.answer(source);
        const destinationElement = await actor.answer(destination);


        await sourceElement.dragAndDrop(destinationElement)
 
   })

export const uploadFile = (element: Answerable<Element<'async'>>, filedir: string) =>
   Interaction.where(`#actor carga un template`,  async actor => {
   const filePath = path.join(__dirname, filedir);
   const a =["a"] 
   //const remoteFilePath = browser.uploadFile(filePath);
   const sourceElement = await actor.answer(element);
   await sourceElement.setValue(filedir)


})

export const DragAndDrop_Coodenates = (source: Answerable<Element<'async'>>, coordenateX: number, coordenateY: number) =>
        Interaction.where(`#actor drags ${ source } to coordenate X: ${ coordenateX } and Y: ${ coordenateY } `,  async actor => {
        const sourceElement = await actor.answer(source);


        await sourceElement.dragAndDrop({x: coordenateX, y: coordenateY})
 
   })

export const move_coordenates = (source: Answerable<Element<'async'>>, coordenatex:number , coordenatey: number ) =>
        Interaction.where(`#actor Move element ${ source } to coordenates x:  ${ coordenatex } and ${ coordenatey } `,  async actor => {
        const sourceElement = await actor.answer(source);

          await sourceElement.moveTo({xOffset: coordenatex, yOffset: coordenatey});
 
   })
   export const move = (source: Answerable<Element<'async'>>) =>
        Interaction.where(`#actor Move to element${ source }`,  async actor => {
        const sourceElement = await actor.answer(source);
          await sourceElement.moveTo();
   })

   export const click_onmousedown = (source: Answerable<Element<'async'>>) =>
        ExecuteScript.async(`
        var element = arguments[0]; 
        var callback = arguments[arguments.length - 1];              
        callback(element.onmousedown())
        `).withArguments(source)

   export const click_onmouseup = (source: Answerable<Element<'async'>>) =>
        ExecuteScript.async(`
        var element = arguments[0]; 
        var callback = arguments[arguments.length - 1];              
        callback(element.onmouseup())
        `).withArguments(source)

   export const onmouse_move = (source: Answerable<Element<'async'>>) =>
          ExecuteScript.async(`
          var element = arguments[0]; 
          var callback = arguments[arguments.length - 1];              
          callback(element.onmousemove)
          `).withArguments(source)
   export const load_complete = () =>
          ExecuteScript.async(`
          var callback = arguments[arguments.length - 1];
          var result = document.readyState    
          callback(result)
          `)
     export const scroll_view = (source: Answerable<Element<'async'>>) =>
          Interaction.where(`#actor scroll to element is visible to user${ source }`,  async actor => {
          const sourceElement = await actor.answer(source);
     })


        
 
 
   