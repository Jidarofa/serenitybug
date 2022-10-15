import { Actor, Cast, TakeNote, TakeNotes } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';
import { ensure, isNotBlank } from 'tiny-types';
import { BrowseTheWeb } from '@serenity-js/webdriverio';

// ## Use diferents actors 
export class Actors implements Cast {

    prepare(actor: Actor): Actor {
        switch (actor.name) {
            case 'Jimmy':
                return actor.whoCan(
                    BrowseTheWeb.using(browser),
                    CallAnApi.at(process.env.CONFIG_HOST),
                    TakeNotes.usingASharedNotepad(),
                );
            case 'Central':
            default:
                return actor.whoCan(
                    BrowseTheWeb.using(browser),
                    CallAnApi.at(process.env.CENTRAL_HOST),
                );
        }
    }
}

// export class Actors implements Cast {
//     constructor(private readonly baseApiUrl: string) {
//         ensure('apiUrl', baseApiUrl, isNotBlank());
//     }

//     prepare(actor: Actor): Actor {
//         return actor.whoCan(
//             CallAnApi.at(this.baseApiUrl),
//         );
//     }
// }