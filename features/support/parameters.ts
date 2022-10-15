import { defineParameterType } from "@cucumber/cucumber";
import { actorCalled, actorInTheSpotlight } from "@serenity-js/core";

defineParameterType({
    regexp: /[A-Z][a-z]+/,
    transformer(name: string) {
        return actorCalled(name);
    },
    name: 'actor',
});

defineParameterType({
    regexp: /el|ella|trate|debe|le|cree|he|she|they|his|her|their/,
    transformer() {
        return actorInTheSpotlight();
    },
    name: 'pronoun',
});