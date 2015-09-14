import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class WeeklyMenu {

    constructor(httpClient){
        this.httpClient = httpClient;
        this.recipes = [];
    }

    activate(){
        let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        return this.httpClient.get('data/recipies.json')
            .then(response => 
                this.recipes = response.content.map((recipe, index) => {
                    recipe.weekday = weekdays[index % weekdays.length];
                    return recipe;
                }));
    }

}