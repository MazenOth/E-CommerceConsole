
import{Product} from './product.js';

export class ProductDatabase{

    testProduct = new Product("test", 123, "test");
    
    products = [this.testProduct];

    addProduct(product) {
        this.products.push(product);
    }
    updateProduct(name, price, category) {
        this.products[0].name = name; 
        this.products[0].price = price; 
        this.products[0].category = category; 
    }
    deleteProduct() {
        this.products.pop();
    }
    listProducts() {
        for (let i = 0; i < this.products.length; i++) {
            console.log(this.products[i]);  
        }
    }
}