"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var shop_service_1 = require("./shop.service");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(productClass) {
        this.productClass = productClass;
        this.name = 'Navarathan';
        this.status = true;
        this.students = [
            { "name": "james", "email": "james@gmail.com", "mobile": 12321312, "id": 100, "path": "app/img/1.jpg", "date": new Date() },
            { "name": "vimal", "email": "vimal@gmail.com", "mobile": 98098098, "id": 101, "path": "app/img/2.jpg", "date": new Date(1988, 1, 4) },
            { "name": "kishore", "email": "kishore@gmail.com", "mobile": 87687687687, "id": 102, "path": "app/img/3.jpg", "date": new Date() },
            { "name": "suresh", "email": "suresh@gmail.com", "mobile": 987987978, "id": 103, "path": "app/img/4.jpg", "date": new Date() },
            { "name": "ramu", "email": "ramu@gmail.com", "mobile": 87587568, "id": 104, "path": "app/img/5.jpg", "date": new Date() }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productClass.getRecords().subscribe(function (products) { return _this.products = products; });
        return this.products;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "app/app.component.html",
        providers: [shop_service_1.shopService]
    }),
    __metadata("design:paramtypes", [shop_service_1.shopService])
], AppComponent);
exports.AppComponent = AppComponent;
// directives : 
//   *NgIf
//   *NgFor 
//# sourceMappingURL=app.component.js.map