class Products {
    constructor(name, description, quantity) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
    }
}
class ProductsManagement {
    constructor() {
        this.listproducts = []
    }
    addProducts(product) {
        this.listproducts.push(product);
    }
    removeProducts(product) {
        for (var i = 0; i < this.listproducts.length; i++) {
            if (this.listproducts[i] == product) {
                this.listproducts.splice(i, 1);
                return;
            }
        }
        return;
    }
    updateProducts(product, newproduct) {
        for (var i = 0; i < this.listproducts.length; i++) {
            if (this.listproducts[i] == product) {
                this.listproducts[i] = newproduct;
                return;
            }
        }
    }
    showProducts() {
        return this.listproducts;
    }
    showFirstProducts () {
        return this.listproducts[0];
    }
    findProducts(nomb){
        for (var i = 0; i < this.listproducts.length; i++) {
            if (this.listproducts[i].name == nomb) {
                return this.listproducts[i];
            }
        }
    }
}
export {Products, ProductsManagement}