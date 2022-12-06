
export class Product {
    #name; 
    #price; 
    #category; 

    constructor(name, price, category) {
        this.#name = Product.#validateName(name);
        this.#price= Product.#validatePrice(price);
        this.#category = Product.#validateCategory(category); 
    }
    
    static #validateName(name) {
        if(name === "") {
            throw new Error("You cannot enter empty product name!");
        }
        return name;
    }
    static #validatePrice(price) {
        if(price <= 0) {
            throw new Error("Your price should be bigger than 0!"); 
        }
        return price;
    }
    static #validateCategory(category) {
        if(category === "") {
            throw new Error("You cannot enter empty category!");
        }
        return category;
    }
    
    get getName() {
        return this.#name;
    }
    set setName(name) {
        if(name === "") {
            throw new Error("You cannot enter empty product name!");
        }
        this.#name = name;
    }
    
    get getPrice() {
        return this.#price;
    }
    set setPrice(price) {
        if(price <= 0) {
            throw new Error("Your price should be bigger than 0!");   
        }
        this.#price = price;
    }
    
    get getCategory() {
        return this.#category;
    }
    set setCategory(category) {
        if(category === "") {
            throw new Error("You cannot enter empty category!");
        }
        this.#category = category;
    }

}