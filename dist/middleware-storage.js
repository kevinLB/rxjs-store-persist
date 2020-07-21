"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareStorage = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS1zdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21pZGRsZXdhcmUtc3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBaUQ7QUFFakQ7SUFBQTtRQUVTLGdCQUFXLEdBQVEsRUFBRSxDQUFDO0lBbUIvQixDQUFDO0lBakJDLG1DQUFPLEdBQVAsVUFBUSxHQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsK0JBQUcsR0FBSDtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxHQUFXO1FBQ3BCLGVBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELG1DQUFPLEdBQVAsVUFBUSxHQUFXLEVBQUUsS0FBYTtRQUNoQyxlQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsaUNBQUssR0FBTCxjQUFlLENBQUM7SUFDbEIsd0JBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBRVksUUFBQSxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZhdWx0IGFzIGxvY2FsZm9yYWdlIH0gZnJvbSAnLi9pbmRleCc7XG5cbmNsYXNzIE1pZGRsZXdhcmVTdG9yYWdlIGltcGxlbWVudHMgU3RvcmFnZSB7XG4gIGxlbmd0aDogYW55O1xuICBwdWJsaWMgZGF0YVN0b3JhZ2U6IGFueSA9IHt9O1xuXG4gIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhU3RvcmFnZVtrZXldO1xuICB9XG5cbiAga2V5KCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIGxvY2FsZm9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfVxuXG4gIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsb2NhbGZvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7fVxufVxuXG5leHBvcnQgY29uc3QgbWlkZGxld2FyZVN0b3JhZ2UgPSBuZXcgTWlkZGxld2FyZVN0b3JhZ2UoKTtcbiJdfQ==