"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var MiddlewareStorage = /** @class */ (function () {
    function MiddlewareStorage() {
        this.dataStorage = {};
    }
    MiddlewareStorage.prototype.getItem = function (key) {
        return this.dataStorage[key];
    };
    MiddlewareStorage.prototype.key = function () {
        return null;
    };
    MiddlewareStorage.prototype.removeItem = function (key) {
        index_1.default.removeItem(key);
    };
    MiddlewareStorage.prototype.setItem = function (key, value) {
        index_1.default.setItem(key, value);
    };
    MiddlewareStorage.prototype.clear = function () { };
    return MiddlewareStorage;
}());
exports.middlewareStorage = new MiddlewareStorage();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS1zdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21pZGRsZXdhcmUtc3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFpRDtBQUVqRDtJQUFBO1FBRVMsZ0JBQVcsR0FBUSxFQUFFLENBQUM7SUFtQi9CLENBQUM7SUFqQkMsbUNBQU8sR0FBUCxVQUFRLEdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCwrQkFBRyxHQUFIO1FBQ0UsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsc0NBQVUsR0FBVixVQUFXLEdBQVc7UUFDcEIsZUFBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsbUNBQU8sR0FBUCxVQUFRLEdBQVcsRUFBRSxLQUFhO1FBQ2hDLGVBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQ0FBSyxHQUFMLGNBQWUsQ0FBQztJQUNsQix3QkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFFWSxRQUFBLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHQgYXMgbG9jYWxmb3JhZ2UgfSBmcm9tICcuL2luZGV4JztcblxuY2xhc3MgTWlkZGxld2FyZVN0b3JhZ2UgaW1wbGVtZW50cyBTdG9yYWdlIHtcbiAgbGVuZ3RoOiBhbnk7XG4gIHB1YmxpYyBkYXRhU3RvcmFnZTogYW55ID0ge307XG5cbiAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmRhdGFTdG9yYWdlW2tleV07XG4gIH1cblxuICBrZXkoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgbG9jYWxmb3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICB9XG5cbiAgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGxvY2FsZm9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHt9XG59XG5cbmV4cG9ydCBjb25zdCBtaWRkbGV3YXJlU3RvcmFnZSA9IG5ldyBNaWRkbGV3YXJlU3RvcmFnZSgpO1xuIl19