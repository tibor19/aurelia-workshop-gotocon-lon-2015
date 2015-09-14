export class App {

    title = "Spaghetti Code Recipes";
    subTitle = "Recipes for failure!";
    //style = {"font-size" : "large", "color" : "red"};

    configureRouter(config, router){
        
        config.map([
                    {route : ['', 'home'], moduleId : './home', 
                        nav: true, title: 'Home'},
                    {name : 'recipe', route : 'recipe/:id', moduleId : './recipe', 
                        nav : false, title : 'Recipe details'},
                    {route : 'weekly-menu', moduleId : './weekly-menu', 
                        nav : true, title:'Weekly menu'}
        ]);
        this.router = router;
    }

}