var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import Croppie from 'croppie';
var NgxCroppieComponent = /** @class */ (function () {
    function NgxCroppieComponent() {
        this.outputFormatOptions = { type: 'base64', size: 'viewport' };
        this.result = new EventEmitter();
    }
    NgxCroppieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._croppie = new Croppie(this.imageEdit.nativeElement, this.croppieOptions);
        this._croppie.bind({
            url: this.imageUrl
        });
        this.bind = function (img) {
            _this._croppie.bind({ url: _this.imageUrl });
        };
    };
    NgxCroppieComponent.prototype.newResult = function () {
        var _this = this;
        this._croppie.result(this.outputFormatOptions).then(function (res) {
            _this.result.emit(res);
        });
    };
    __decorate([
        ViewChild('imageEdit')
    ], NgxCroppieComponent.prototype, "imageEdit", void 0);
    __decorate([
        Input()
    ], NgxCroppieComponent.prototype, "croppieOptions", void 0);
    __decorate([
        Input()
    ], NgxCroppieComponent.prototype, "imageUrl", void 0);
    __decorate([
        Input()
    ], NgxCroppieComponent.prototype, "bind", void 0);
    __decorate([
        Input()
    ], NgxCroppieComponent.prototype, "outputFormatOptions", void 0);
    __decorate([
        Output()
    ], NgxCroppieComponent.prototype, "result", void 0);
    NgxCroppieComponent = __decorate([
        Component({
            selector: 'ngx-croppie',
            template: "<div #imageEdit (update)=\"newResult()\"></div>"
        })
    ], NgxCroppieComponent);
    return NgxCroppieComponent;
}());
export { NgxCroppieComponent };
//# sourceMappingURL=ngx-croppie.component.js.map