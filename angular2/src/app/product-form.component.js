"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var products_1 = require("./products");
var ProductFormComponent = (function () {
    function ProductFormComponent() {
        this.model = new products_1.Product(1, 'ProductA');
        this.result = 0;
    }
    ProductFormComponent.prototype.disp = function () {
        this.result = this.model.productid;
    };
    return ProductFormComponent;
}());
ProductFormComponent = __decorate([
    core_1.Component({
        selector: 'product-form',
        templateUrl: './product-form.component.html'
    })
], ProductFormComponent);
exports.ProductFormComponent = ProductFormComponent;
//# sourceMappingURL=product-form.component.js.map