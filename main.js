class Fooditem{
    constructor( name, calories, vegan, glutenFree, citrusFree){
        this.name = name;
        this.calories = calories;
        this.vegan = vegan;
        this.glutenFree = glutenFree;
        this.citrusFree = citrusFree;
    }
stringify(){
    if(this.vegan){
        var isVegan=" is vegan";
        
    }else {
        var isVegan = " is not vegan";
        
    }
    if(this.glutenFree){
        var isGlutenFree = " is gluten free";
    }else{
        var isGlutenFree = " is not gluten free";
    }
    if(this.citrusFree){
        var isCitrusFree = " is citrus free";
    }else{
        var isCitrusFree = " is not citrus free";
    }
        console.log("Today's Menu includes, " + this.name + " which has " + this.calories + " calories." + this.name + isVegan + "," + isGlutenFree + ", and" + isCitrusFree + ".")
    }
}

var sandwhich = new Fooditem(" Ham sandwhich", 300, false, false, true);
var soup = new Fooditem(" The Soup of the day", 250, true, true, false);
var pasta = new Fooditem(" The Alfredo", 800, false, false, true);
var potatoes = new Fooditem(" Potatoes", 275, true, true, true)
var breadsticks = new Fooditem("Breadsticks", 12, false, true, false)

sandwhich.stringify();
soup.stringify();
pasta.stringify();


//==============Part II======================
function Drink(name, description, price, ingredients){
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}
Drink.prototype.stringify = function(){
    console.log("Ours drinks include " + this.name + ". " + this.description + " " + "It costs " + this.price + " dollars. " + this.name + " is made of " + this.ingredients + ".")
}
var whiskeySour = new Drink ("Whiskey Sour", "Our whiskey sour is made with the very best whisky, aged for almost a year in a plastic bottle. It can't be beat!", 4.50, ["whiskey", " sour mix", " and lime"])
var vodkaTonic = new Drink ("Vodka Tonic", "Premium Vodka with high quality tonic water. Simple and YUMMY!", 5.00, ["Premium vodka", " tonic water", " and lime"])
var bloodyMary = new Drink ("Bloody Mary", "Made with Kettle One vodka, this drink pushes the boundry of what a Bloody Mary can be!", 6.25, ["Kettle one", " tomato juice", " celery", " spices", " bacon!", " and a fried egg"])

whiskeySour.stringify();
vodkaTonic.stringify();
bloodyMary.stringify();



function Plate(name, description, price, ingredients){
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}
Plate.prototype.stringify = function(){
    console.log(this.name + " Will set your tastebuds on fire " + this.description + " For only " + this.price + " this dish has:" + this.ingredients)
}
var hamPlate = new Plate ("Ham sandwhich with potatoes", "Delicious Ham Sandwhich with creamy mashed potatoes", 11.00, [sandwhich, potatoes])
var soupPlate = new Plate ("Soup with Bread Sticks", "Hot Soup served with a spork", 9.25, [soup, breadsticks])
var pastaPlate= new Plate ("Pasta with creamy Alfredo sauce", "Hand cut pasta with housemade Sauce", 13.00, [pasta, breadsticks])

hamPlate.stringify()
soupPlate.stringify()
pastaPlate.stringify()



function Order(plates){
    this.plates = plates;
}

function Menu(plates){
    this.plates = plates;
}


function Restaurant(name, description, menu){
    this.name = name;
    this.description = description;
    this.menu = menu;
}

function Customer(dietaryPreference){
    this.dietaryPreference = dietaryPreference;
}




Plate.prototype.stringify= function(){
    console.log("");
}


Order.prototype.stringify= function(){
    console.log("");
}


Menu.prototype.stringify= function(){
    console.log("");
}


Restaurant.prototype.stringify= function(){
    console.log("");
}


Customer.prototype.stringify= function(){
    console.log("");
}
