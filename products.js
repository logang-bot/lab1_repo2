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
            //console.log(this.listproducts[i].name + " " +
                //this.listproducts[i].description + " " +
                //this.listproducts[i].quantity)
            if (this.listproducts[i].name == product) {
                //console.log("fsd");
                this.listproducts.splice(i, 1);
                return;
            }
        }
        return;
    }
    updateProducts(product, nomb, desc, quan) {
        for (var i = 0; i < this.listproducts.length; i++) {
            console.log(this.listproducts[i].name + " " +
                this.listproducts[i].description + " " +
                this.listproducts[i].quantity)
            if (this.listproducts[i] == product) {
                this.listproducts[i].name = nomb;
                this.listproducts[i].description = desc;
                this.listproducts[i].quantity = quan;
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
    findProducts(nomb, desc, quan){
        for (var i = 0; i < this.listproducts.length; i++) {
            if (this.listproducts[i].name == nomb && this.listproducts[i].description == desc && this.listproducts[i].name == quan) {
                return this.listproducts[i];
            }
        }
    }
}
export {Products, ProductsManagement}