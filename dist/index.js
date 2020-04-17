"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var localForage = require("localforage");
var middleware_storage_1 = require("./middleware-storage");
var options_1 = require("./options");
var storage_sync_1 = require("./storage-sync");
exports.getAllDataFromLocalForage = function (options) {
    options_1.config.keys = options.keys;
    options_1.config.storage = middleware_storage_1.middlewareStorage;
    localForage.config({
        driver: options.driver || localForage.LOCALSTORAGE,
        name: 'NGRX Storage',
        version: 1.0,
        size: 4980736,
        storeName: 'keyvaluepairs',
        description: 'NGRX storage persist'
    });
    return localForage.keys()
        .then(function (keys) {
        return Promise.all(keys.map(function (key) { return localForage.getItem(key).then(function (data) { return [key, data]; }); }));
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
exports.default = localForage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBMkM7QUFDM0MsMkRBQXVEO0FBQ3ZELHFDQUFnRDtBQUNoRCwrQ0FBMkM7QUFFOUIsUUFBQSx5QkFBeUIsR0FBRyxVQUFDLE9BQXNCO0lBQzlELGdCQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDM0IsZ0JBQU0sQ0FBQyxPQUFPLEdBQUcsc0NBQWlCLENBQUM7SUFDbkMsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUNqQixNQUFNLEVBQVEsT0FBTyxDQUFDLE1BQU0sSUFBSSxXQUFXLENBQUMsWUFBWTtRQUN4RCxJQUFJLEVBQVUsY0FBYztRQUM1QixPQUFPLEVBQU8sR0FBRztRQUNqQixJQUFJLEVBQVUsT0FBTztRQUNyQixTQUFTLEVBQUssZUFBZTtRQUM3QixXQUFXLEVBQUcsc0JBQXNCO0tBQ3JDLENBQUMsQ0FBQztJQUVILE9BQU8sV0FBVyxDQUFDLElBQUksRUFBRTtTQUN0QixJQUFJLENBQUMsVUFBQSxJQUFJO1FBQ1IsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUNoQixJQUFJLENBQUMsR0FBRyxDQUNOLFVBQUMsR0FBRyxJQUFLLE9BQUEsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBWCxDQUFXLENBQUMsRUFBbEQsQ0FBa0QsQ0FDNUQsQ0FDRixDQUFDO0lBQ0osQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLFVBQUEsWUFBWTtRQUNoQixJQUFNLFdBQVcsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQUMsYUFBa0IsRUFBRSxFQUFXO2dCQUFWLFdBQUcsRUFBRSxZQUFJO1lBQ3JFLGFBQWEsQ0FBUyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDbEMsT0FBTyxhQUFhLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1Asc0NBQWlCLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUM1QyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVGLFNBQWdCLHNCQUFzQixDQUNsQyxPQUFZO0lBRWQsT0FBTywwQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFKRCx3REFJQztBQUVELGtCQUFlLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxvY2FsRm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlJztcbmltcG9ydCB7bWlkZGxld2FyZVN0b3JhZ2V9IGZyb20gXCIuL21pZGRsZXdhcmUtc3RvcmFnZVwiO1xuaW1wb3J0IHtjb25maWcsIFN0b3JhZ2VDb25maWd9IGZyb20gXCIuL29wdGlvbnNcIjtcbmltcG9ydCB7c3RvcmFnZVN5bmN9IGZyb20gXCIuL3N0b3JhZ2Utc3luY1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxsRGF0YUZyb21Mb2NhbEZvcmFnZSA9IChvcHRpb25zOiBTdG9yYWdlQ29uZmlnKSA9PiB7XG4gIGNvbmZpZy5rZXlzID0gb3B0aW9ucy5rZXlzO1xuICBjb25maWcuc3RvcmFnZSA9IG1pZGRsZXdhcmVTdG9yYWdlO1xuICBsb2NhbEZvcmFnZS5jb25maWcoe1xuICAgIGRyaXZlciAgICAgIDogb3B0aW9ucy5kcml2ZXIgfHwgbG9jYWxGb3JhZ2UuTE9DQUxTVE9SQUdFLFxuICAgIG5hbWUgICAgICAgIDogJ05HUlggU3RvcmFnZScsXG4gICAgdmVyc2lvbiAgICAgOiAxLjAsXG4gICAgc2l6ZSAgICAgICAgOiA0OTgwNzM2LFxuICAgIHN0b3JlTmFtZSAgIDogJ2tleXZhbHVlcGFpcnMnLFxuICAgIGRlc2NyaXB0aW9uIDogJ05HUlggc3RvcmFnZSBwZXJzaXN0J1xuICB9KTtcblxuICByZXR1cm4gbG9jYWxGb3JhZ2Uua2V5cygpXG4gICAgLnRoZW4oa2V5cyA9PiB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICAgIGtleXMubWFwKFxuICAgICAgICAgIChrZXkpID0+IGxvY2FsRm9yYWdlLmdldEl0ZW0oa2V5KS50aGVuKGRhdGEgPT4gW2tleSwgZGF0YV0pXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgICAudGhlbihkYXRhV2l0aEtleXMgPT4ge1xuICAgICAgY29uc3QgZGF0YVN0b3JhZ2UgPSBkYXRhV2l0aEtleXMucmVkdWNlKChwcmV2aW91c1ZhbHVlOiBhbnksIFtrZXksIGRhdGFdKSA9PiB7XG4gICAgICAgIHByZXZpb3VzVmFsdWVbPHN0cmluZz5rZXldID0gZGF0YTtcbiAgICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWU7XG4gICAgICB9LCB7fSk7XG4gICAgICBtaWRkbGV3YXJlU3RvcmFnZS5kYXRhU3RvcmFnZSA9IGRhdGFTdG9yYWdlO1xuICAgICAgcmV0dXJuIGRhdGFTdG9yYWdlO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JhZ2VTeW5jTWV0YVJlZHVjZXIoXG4gICAgcmVkdWNlcjogYW55XG4pOiBhbnkge1xuICByZXR1cm4gc3RvcmFnZVN5bmMocmVkdWNlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2FsRm9yYWdlO1xuIl19