import {Products, ProductsManagement} from "./products.js";
class Ui {
    constructor() {
        this.uiName = document.getElementById("name");
        this.uiDescription = document.getElementById("description");
        this.uiQuantity = document.getElementById("quantity");
        this.uiForm = document.getElementById("form-data");
        this.uiForm2 = document.getElementById("form-data-2");
        this.uiName2 = document.getElementById("name2");
        this.uiForm3 = document.getElementById("form-data-3");
        this.uiName3 = document.getElementById("name3");
        this.uiDescription3 = document.getElementById("description3");
        this.uiQuantity3 = document.getElementById("quantity3");
        this.container = document.getElementById("container-table");
        this.manager =  new ProductsManagement();
        let p1 = new Products("Pollo", "Pollo Sofia", 20);
        let p2 = new Products("Galletas", "Galletas Mabel", 50);
        let p3 = new Products("Pollo", "Pollo Imba", 50);
        this.p4 = new Products("","",0);
        this.manager.addProducts(p1);
        this.manager.addProducts(p2);
        this.manager.addProducts(p3);
        this.loadEvents();
    }
    loadEvents() {
        this.uiForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addProducts(
                this.uiName.value,
                this.uiDescription.value,
                this.uiQuantity.value);
            this.clearForm();
        });
        this.uiForm.addEventListener("reset", (e) => {
            e.preventDefault();
            this.deleteProducts(this.uiName.value);
            this.p4 = new Products("","",0);
            this.uiName3.value = "";
            this.uiDescription3.value = "";
            this.uiQuantity3.value = "";
            this.clearForm();
        });
        this.uiForm3.addEventListener("submit", (e) => {
            e.preventDefault();
            this.upProducts(
                this.uiName3.value,
                this.uiDescription3.value,
                this.uiQuantity3.value);
            this.clearForm();
        });
        this.uiForm2.addEventListener("submit", (e) => {
            e.preventDefault();
            this.searchProduct(this.uiName2.value);
            this.uiName2.value = "";
        });
    }
    clearForm() {
        this.uiName.value = "";
        this.uiDescription.value = ""
        this.uiQuantity.value = ""
    }
    loadTable() {
        var html = "";
        for (var i = 0; i < this.manager.showProducts().length; i++) {
            html += `
            <tr>
                <td scope="row">
                ${this.manager.showProducts()[i].name}</td>
                <td>${this.manager.showProducts()[i].description}</td>
                <td>${this.manager.showProducts()[i].quantity}</td>
            </tr>`;
        }
        this.container.innerHTML = html;
    }
    addProducts(name, description, quantity) {
        let p1 = new Products(name, description, quantity);
        this.manager.addProducts(p1);
        this.loadTable();
    }
    deleteProducts(nomb){
        this.manager.removeProducts(nomb);
        this.loadTable();
    }
    upProducts(nomb, desc, quan){
        this.manager.updateProducts(this.p4, nomb, desc, quan);
        this.loadTable();
    }
    searchProduct(nomb){
        for (var i = 0; i < this.manager.showProducts().length; i++) {
            if(this.manager.showProducts()[i].description == nomb){
                this.p4 = this.manager.showProducts()[i];
                this.uiName.value = this.manager.showProducts()[i].name;
                this.uiDescription.value = this.manager.showProducts()[i].description;
                this.uiQuantity.value = this.manager.showProducts()[i].quantity;
                this.uiName3.value = this.manager.showProducts()[i].name;
                this.uiDescription3.value = this.manager.showProducts()[i].description;
                this.uiQuantity3.value = this.manager.showProducts()[i].quantity;
                return;
            }
        }
    }
}
let ui = new Ui();
ui.loadTable();
