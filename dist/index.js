"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageSyncMetaReducer = exports.getAllDataFromLocalForage = void 0;
var localforage_1 = require("localforage");
var middleware_storage_1 = require("./middleware-storage");
var options_1 = require("./options");
var storage_sync_1 = require("./storage-sync");
exports.getAllDataFromLocalForage = function (options) {
    options_1.config.keys = options.keys;
    options_1.config.storage = middleware_storage_1.middlewareStorage;
    localforage_1.default.config({
        driver: options.driver || localforage_1.default.LOCALSTORAGE,
        name: 'NGRX Storage',
        version: 1.0,
        size: 4980736,
        storeName: 'keyvaluepairs',
        description: 'NGRX storage persist'
    });
    return localforage_1.default.keys()
        .then(function (keys) {
        return Promise.all(keys.map(function (key) { return localforage_1.default.getItem(key).then(function (data) { return [key, data]; }); }));
    })
        .then(function (dataWithKeys) {
        var dataStorage = dataWithKeys.reduce(function (previousValue, _a) {
            var key = _a[0], data = _a[1];
            previousValue[key] = data;
            return previousValue;
        }, {});
        middleware_storage_1.middlewareStorage.dataStorage = dataStorage;
        return dataStorage;
    });
};
function storageSyncMetaReducer(reducer) {
    return storage_sync_1.storageSync(reducer);
}
exports.storageSyncMetaReducer = storageSyncMetaReducer;
exports.default = localforage_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXNDO0FBQ3RDLDJEQUF1RDtBQUN2RCxxQ0FBZ0Q7QUFDaEQsK0NBQTJDO0FBRTlCLFFBQUEseUJBQXlCLEdBQUcsVUFBQyxPQUFzQjtJQUM5RCxnQkFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzNCLGdCQUFNLENBQUMsT0FBTyxHQUFHLHNDQUFpQixDQUFDO0lBQ25DLHFCQUFXLENBQUMsTUFBTSxDQUFDO1FBQ2pCLE1BQU0sRUFBUSxPQUFPLENBQUMsTUFBTSxJQUFJLHFCQUFXLENBQUMsWUFBWTtRQUN4RCxJQUFJLEVBQVUsY0FBYztRQUM1QixPQUFPLEVBQU8sR0FBRztRQUNqQixJQUFJLEVBQVUsT0FBTztRQUNyQixTQUFTLEVBQUssZUFBZTtRQUM3QixXQUFXLEVBQUcsc0JBQXNCO0tBQ3JDLENBQUMsQ0FBQztJQUVILE9BQU8scUJBQVcsQ0FBQyxJQUFJLEVBQUU7U0FDdEIsSUFBSSxDQUFDLFVBQUEsSUFBSTtRQUNSLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FDaEIsSUFBSSxDQUFDLEdBQUcsQ0FDTixVQUFDLEdBQUcsSUFBSyxPQUFBLHFCQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFYLENBQVcsQ0FBQyxFQUFsRCxDQUFrRCxDQUM1RCxDQUNGLENBQUM7SUFDSixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsVUFBQSxZQUFZO1FBQ2hCLElBQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBQyxhQUFrQixFQUFFLEVBQVc7Z0JBQVYsR0FBRyxRQUFBLEVBQUUsSUFBSSxRQUFBO1lBQ3JFLGFBQWEsQ0FBUyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDbEMsT0FBTyxhQUFhLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1Asc0NBQWlCLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUM1QyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVGLFNBQWdCLHNCQUFzQixDQUNsQyxPQUFZO0lBRWQsT0FBTywwQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFKRCx3REFJQztBQUVELGtCQUFlLHFCQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9jYWxGb3JhZ2UgZnJvbSBcImxvY2FsZm9yYWdlXCI7XG5pbXBvcnQge21pZGRsZXdhcmVTdG9yYWdlfSBmcm9tIFwiLi9taWRkbGV3YXJlLXN0b3JhZ2VcIjtcbmltcG9ydCB7Y29uZmlnLCBTdG9yYWdlQ29uZmlnfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5pbXBvcnQge3N0b3JhZ2VTeW5jfSBmcm9tIFwiLi9zdG9yYWdlLXN5bmNcIjtcblxuZXhwb3J0IGNvbnN0IGdldEFsbERhdGFGcm9tTG9jYWxGb3JhZ2UgPSAob3B0aW9uczogU3RvcmFnZUNvbmZpZykgPT4ge1xuICBjb25maWcua2V5cyA9IG9wdGlvbnMua2V5cztcbiAgY29uZmlnLnN0b3JhZ2UgPSBtaWRkbGV3YXJlU3RvcmFnZTtcbiAgbG9jYWxGb3JhZ2UuY29uZmlnKHtcbiAgICBkcml2ZXIgICAgICA6IG9wdGlvbnMuZHJpdmVyIHx8IGxvY2FsRm9yYWdlLkxPQ0FMU1RPUkFHRSxcbiAgICBuYW1lICAgICAgICA6ICdOR1JYIFN0b3JhZ2UnLFxuICAgIHZlcnNpb24gICAgIDogMS4wLFxuICAgIHNpemUgICAgICAgIDogNDk4MDczNixcbiAgICBzdG9yZU5hbWUgICA6ICdrZXl2YWx1ZXBhaXJzJyxcbiAgICBkZXNjcmlwdGlvbiA6ICdOR1JYIHN0b3JhZ2UgcGVyc2lzdCdcbiAgfSk7XG5cbiAgcmV0dXJuIGxvY2FsRm9yYWdlLmtleXMoKVxuICAgIC50aGVuKGtleXMgPT4ge1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICBrZXlzLm1hcChcbiAgICAgICAgICAoa2V5KSA9PiBsb2NhbEZvcmFnZS5nZXRJdGVtKGtleSkudGhlbihkYXRhID0+IFtrZXksIGRhdGFdKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICAgLnRoZW4oZGF0YVdpdGhLZXlzID0+IHtcbiAgICAgIGNvbnN0IGRhdGFTdG9yYWdlID0gZGF0YVdpdGhLZXlzLnJlZHVjZSgocHJldmlvdXNWYWx1ZTogYW55LCBba2V5LCBkYXRhXSkgPT4ge1xuICAgICAgICBwcmV2aW91c1ZhbHVlWzxzdHJpbmc+a2V5XSA9IGRhdGE7XG4gICAgICAgIHJldHVybiBwcmV2aW91c1ZhbHVlO1xuICAgICAgfSwge30pO1xuICAgICAgbWlkZGxld2FyZVN0b3JhZ2UuZGF0YVN0b3JhZ2UgPSBkYXRhU3RvcmFnZTtcbiAgICAgIHJldHVybiBkYXRhU3RvcmFnZTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yYWdlU3luY01ldGFSZWR1Y2VyKFxuICAgIHJlZHVjZXI6IGFueVxuKTogYW55IHtcbiAgcmV0dXJuIHN0b3JhZ2VTeW5jKHJlZHVjZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2NhbEZvcmFnZTtcbiJdfQ==