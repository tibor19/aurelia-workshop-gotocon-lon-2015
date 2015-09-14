import {inject} from 'aurelia-framework';
import {join} from 'aurelia-path';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Recipe{

    // static inject = [HttpClient];

    constructor(http){
        this.http = http;
        this.recipe = null;
        this.url = 'http://recipewebapi.azurewebsites.net/api/recipes';
        this.editMode = false;
        this.errorMessage = "";
    }

    activate(params){
        //join(this.url, params.id)
        console.log(params.id);
        return this.http.get(join(this.url, params.id))
                    .then(response => this.recipe = response.content);
    }

    editRecipe(){
        this.editMode = true;
    }

    saveRecipe(){
        if(this.recipe == null)
            return false;

        return this.http.put(join(this.url, this.recipe.recipeID + ""), this.recipe)
            .then( () => {
                this.editMode = false;
                this.errorMessage = "";
            })
            .catch(errorMessage => this.errorMessage = errorMessage);
    }

}

export class ImageValueConverter{

    toView(source){
        return 'content/images/food/' + source + '.jpg';
    }
}