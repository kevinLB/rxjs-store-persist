"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncStateUpdate = exports.rehydrateApplicationState = exports.storageSync = void 0;
var deepmerge = require("deepmerge");
var helpers_1 = require("./helpers");
var options_1 = require("./options");
var INIT_ACTION = '@ngrx/store/init';
var UPDATE_ACTION = '@ngrx/store/update-reducers';
function storageSync(reducer) {
    var stateKeys = helpers_1.validateStateKeys(options_1.config.keys);
    var rehydratedState = exports.rehydrateApplicationState(stateKeys, options_1.config.storage);
    return function (state, action) {
        var nextState;
        if ((action.type === INIT_ACTION) && !state) {
            nextState = reducer(state, action);
        }
        else {
            nextState = __assign({}, state);
        }
        if (action.type === INIT_ACTION || action.type === UPDATE_ACTION) {
            // @ts-ignore
            var overwriteMerge = function (destinationArray, sourceArray) { return sourceArray; };
            var options = {
                arrayMerge: overwriteMerge
            };
            nextState = deepmerge(nextState, rehydratedState, options);
        }
        nextState = reducer(nextState, action);
        if (action.type !== INIT_ACTION) {
            exports.syncStateUpdate(nextState, stateKeys, options_1.config.storage);
        }
        return nextState;
    };
}
exports.storageSync = storageSync;
exports.rehydrateApplicationState = function (keys, storage) {
    return keys.reduce(function (acc, curr) {
        var _a;
        var key = curr;
        if (storage !== undefined) {
            var stateSlice = storage.getItem(key);
            if (stateSlice) {
                var isObjectRegex = new RegExp('{|\\[');
                var raw = stateSlice;
                if (stateSlice === 'null' || isObjectRegex.test(stateSlice.charAt(0))) {
                    raw = JSON.parse(stateSlice);
                }
                return Object.assign({}, acc, (_a = {},
                    _a[key] = raw,
                    _a));
            }
        }
        return acc;
    }, {});
};
exports.syncStateUpdate = function (state, keys, storage) {
    keys.forEach(function (key) {
        var stateSlice = state[key];
        var replacer = undefined;
        var space = undefined;
        if (typeof stateSlice !== 'undefined' && storage !== undefined) {
            try {
                storage.setItem(key, typeof stateSlice === 'string'
                    ? stateSlice
                    : JSON.stringify(stateSlice, replacer, space));
            }
            catch (e) {
                console.warn('Unable to save state to localStorage:', e);
            }
        }
        else if (typeof stateSlice === 'undefined') {
            try {
                storage.removeItem(key);
            }
            catch (e) {
                console.warn("Exception on removing/cleaning undefined '" + key + "' state", e);
            }
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS1zeW5jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3N0b3JhZ2Utc3luYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUF1QztBQUN2QyxxQ0FBNEM7QUFDNUMscUNBQWlDO0FBRWpDLElBQU0sV0FBVyxHQUFHLGtCQUFrQixDQUFDO0FBQ3ZDLElBQU0sYUFBYSxHQUFHLDZCQUE2QixDQUFDO0FBRXBELFNBQWdCLFdBQVcsQ0FBQyxPQUFZO0lBQ3BDLElBQU0sU0FBUyxHQUFHLDJCQUFpQixDQUFDLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsSUFBTSxlQUFlLEdBQUcsaUNBQXlCLENBQUMsU0FBUyxFQUFFLGdCQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFN0UsT0FBTyxVQUFVLEtBQVUsRUFBRSxNQUFXO1FBQ3BDLElBQUksU0FBUyxDQUFDO1FBRWQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDekMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNILFNBQVMsZ0JBQU8sS0FBSyxDQUFDLENBQUM7U0FDMUI7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssYUFBYSxFQUFFO1lBQzlELGFBQWE7WUFDYixJQUFNLGNBQWMsR0FBRyxVQUFDLGdCQUFxQixFQUFFLFdBQWdCLElBQUssT0FBQSxXQUFXLEVBQVgsQ0FBVyxDQUFDO1lBQ2hGLElBQU0sT0FBTyxHQUFzQjtnQkFDL0IsVUFBVSxFQUFFLGNBQWM7YUFDN0IsQ0FBQztZQUNGLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM5RDtRQUVELFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXZDLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7WUFDN0IsdUJBQWUsQ0FDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULGdCQUFNLENBQUMsT0FBTyxDQUNqQixDQUFDO1NBQ0w7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDLENBQUM7QUFDTixDQUFDO0FBakNELGtDQWlDQztBQUVZLFFBQUEseUJBQXlCLEdBQUcsVUFDckMsSUFBVyxFQUNYLE9BQWdCO0lBRWhCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxJQUFJOztRQUN6QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFFZixJQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxJQUFJLFVBQVUsRUFBRTtnQkFDWixJQUFNLGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDO2dCQUVyQixJQUFJLFVBQVUsS0FBSyxNQUFNLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ25FLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNoQztnQkFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUc7b0JBQ3hCLEdBQUMsR0FBRyxJQUFHLEdBQUc7d0JBQ1osQ0FBQzthQUNOO1NBQ0o7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQztBQUVXLFFBQUEsZUFBZSxHQUFHLFVBQzNCLEtBQVUsRUFDVixJQUFXLEVBQ1gsT0FBZ0I7SUFFaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7UUFDWixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUV0QixJQUFJLE9BQU8sVUFBVSxLQUFLLFdBQVcsSUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzVELElBQUk7Z0JBQ0EsT0FBTyxDQUFDLE9BQU8sQ0FDWCxHQUFHLEVBQ0gsT0FBTyxVQUFVLEtBQUssUUFBUTtvQkFDMUIsQ0FBQyxDQUFDLFVBQVU7b0JBQ1osQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FDcEQsQ0FBQzthQUNMO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM1RDtTQUNKO2FBQU0sSUFBSSxPQUFPLFVBQVUsS0FBSyxXQUFXLEVBQUU7WUFDMUMsSUFBSTtnQkFDQSxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLElBQUksQ0FDUiwrQ0FBNkMsR0FBRyxZQUFTLEVBQ3pELENBQUMsQ0FDSixDQUFDO2FBQ0w7U0FDSjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZGVlcG1lcmdlIGZyb20gXCJkZWVwbWVyZ2VcIjtcbmltcG9ydCB7dmFsaWRhdGVTdGF0ZUtleXN9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCB7Y29uZmlnfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbmNvbnN0IElOSVRfQUNUSU9OID0gJ0BuZ3J4L3N0b3JlL2luaXQnO1xuY29uc3QgVVBEQVRFX0FDVElPTiA9ICdAbmdyeC9zdG9yZS91cGRhdGUtcmVkdWNlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RvcmFnZVN5bmMocmVkdWNlcjogYW55KSB7XG4gICAgY29uc3Qgc3RhdGVLZXlzID0gdmFsaWRhdGVTdGF0ZUtleXMoY29uZmlnLmtleXMpO1xuICAgIGNvbnN0IHJlaHlkcmF0ZWRTdGF0ZSA9IHJlaHlkcmF0ZUFwcGxpY2F0aW9uU3RhdGUoc3RhdGVLZXlzLCBjb25maWcuc3RvcmFnZSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSB7XG4gICAgICAgIGxldCBuZXh0U3RhdGU7XG5cbiAgICAgICAgaWYgKChhY3Rpb24udHlwZSA9PT0gSU5JVF9BQ1RJT04pICYmICFzdGF0ZSkge1xuICAgICAgICAgICAgbmV4dFN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5leHRTdGF0ZSA9IHsuLi5zdGF0ZX07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBJTklUX0FDVElPTiB8fCBhY3Rpb24udHlwZSA9PT0gVVBEQVRFX0FDVElPTikge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3Qgb3ZlcndyaXRlTWVyZ2UgPSAoZGVzdGluYXRpb25BcnJheTogYW55LCBzb3VyY2VBcnJheTogYW55KSA9PiBzb3VyY2VBcnJheTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IGRlZXBtZXJnZS5PcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGFycmF5TWVyZ2U6IG92ZXJ3cml0ZU1lcmdlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbmV4dFN0YXRlID0gZGVlcG1lcmdlKG5leHRTdGF0ZSwgcmVoeWRyYXRlZFN0YXRlLCBvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHRTdGF0ZSA9IHJlZHVjZXIobmV4dFN0YXRlLCBhY3Rpb24pO1xuXG4gICAgICAgIGlmIChhY3Rpb24udHlwZSAhPT0gSU5JVF9BQ1RJT04pIHtcbiAgICAgICAgICAgIHN5bmNTdGF0ZVVwZGF0ZShcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUsXG4gICAgICAgICAgICAgICAgc3RhdGVLZXlzLFxuICAgICAgICAgICAgICAgIGNvbmZpZy5zdG9yYWdlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgcmVoeWRyYXRlQXBwbGljYXRpb25TdGF0ZSA9IChcbiAgICBrZXlzOiBhbnlbXSxcbiAgICBzdG9yYWdlOiBTdG9yYWdlXG4pID0+IHtcbiAgICByZXR1cm4ga2V5cy5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xuICAgICAgICBsZXQga2V5ID0gY3VycjtcblxuICAgICAgICBpZiAoc3RvcmFnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgc3RhdGVTbGljZSA9IHN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICAgICAgaWYgKHN0YXRlU2xpY2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc09iamVjdFJlZ2V4ID0gbmV3IFJlZ0V4cCgne3xcXFxcWycpO1xuICAgICAgICAgICAgICAgIGxldCByYXcgPSBzdGF0ZVNsaWNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlU2xpY2UgPT09ICdudWxsJyB8fCBpc09iamVjdFJlZ2V4LnRlc3Qoc3RhdGVTbGljZS5jaGFyQXQoMCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhdyA9IEpTT04ucGFyc2Uoc3RhdGVTbGljZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGFjYywge1xuICAgICAgICAgICAgICAgICAgICBba2V5XTogcmF3XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc3luY1N0YXRlVXBkYXRlID0gKFxuICAgIHN0YXRlOiBhbnksXG4gICAga2V5czogYW55W10sXG4gICAgc3RvcmFnZTogU3RvcmFnZVxuKSA9PiB7XG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZVNsaWNlID0gc3RhdGVba2V5XTtcbiAgICAgICAgbGV0IHJlcGxhY2VyID0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgc3BhY2UgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZVNsaWNlICE9PSAndW5kZWZpbmVkJyAmJiBzdG9yYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBzdGF0ZVNsaWNlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBzdGF0ZVNsaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICA6IEpTT04uc3RyaW5naWZ5KHN0YXRlU2xpY2UsIHJlcGxhY2VyLCBzcGFjZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignVW5hYmxlIHRvIHNhdmUgc3RhdGUgdG8gbG9jYWxTdG9yYWdlOicsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdGF0ZVNsaWNlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICAgIGBFeGNlcHRpb24gb24gcmVtb3ZpbmcvY2xlYW5pbmcgdW5kZWZpbmVkICcke2tleX0nIHN0YXRlYCxcbiAgICAgICAgICAgICAgICAgICAgZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG4iXX0=