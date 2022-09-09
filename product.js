
export class Product {
    #name; 
    #price; 
    #category; 

    constructor(name, price, category) {
        this.#name = Product.#validateName(name);
        this.#price= Product.#validatePrice(price);
        this.#category = Product.#validateCategory(category); 
    }
    
    static #validateName(value) {
        if(value === "") {
            throw new Error("You cannot enter empty product name!");
        }
        return value;
    }
    static #validatePrice(value) {
        if(value <= 0) {
            throw new Error("Your price should be bigger than 0!"); 
        }
        return value;
    }
    static #validateCategory(value) {
        if(value === "") {
            throw new Error("You cannot enter empty category!");
        }
        return value;
    }
    
    get getName() {
        return this.#name;
    }
    set setName(value) {
        if(value === "") {
            throw new Error("You cannot enter empty product name!");
        }
        this.#name = value;
    }
    
    get getPrice() {
        return this.#price;
    }
    set setPrice(value) {
        if(value <= 0) {
            throw new Error("Your price should be bigger than 0!");   
        }
        this.#price = value;
    }
    
    get getCategory() {
        return this.#category;
    }
    set setCategory(value) {
        if(value === "") {
            throw new Error("You cannot enter empty category!");
        }
        this.#category = value;
    }

}