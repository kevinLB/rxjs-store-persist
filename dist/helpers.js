"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsBrowserEnv = function () {
    return typeof window !== 'undefined';
};
exports.validateStateKeys = function (keys) {
    if (keys === void 0) { keys = []; }
    return keys.map(function (key) {
        var attr = key;
        if (typeof attr !== 'string') {
            throw new TypeError("localStorageSync Unknown Parameter Type: " +
                ("Expected type of string, got " + typeof attr));
        }
        return key;
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWxwZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxpQkFBaUIsR0FBRztJQUMvQixPQUFPLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQTtBQUN0QyxDQUFDLENBQUM7QUFFVyxRQUFBLGlCQUFpQixHQUFHLFVBQUMsSUFBZ0I7SUFBaEIscUJBQUEsRUFBQSxTQUFnQjtJQUNoRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHO1FBQ2pCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUVmLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLE1BQU0sSUFBSSxTQUFTLENBQ2pCLDJDQUEyQztpQkFDM0Msa0NBQWdDLE9BQU8sSUFBTSxDQUFBLENBQzlDLENBQUM7U0FDSDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2hlY2tJc0Jyb3dzZXJFbnYgPSAoKSA9PiB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xufTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlU3RhdGVLZXlzID0gKGtleXM6IGFueVtdID0gW10pID0+IHtcbiAgcmV0dXJuIGtleXMubWFwKGtleSA9PiB7XG4gICAgbGV0IGF0dHIgPSBrZXk7XG5cbiAgICBpZiAodHlwZW9mIGF0dHIgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBgbG9jYWxTdG9yYWdlU3luYyBVbmtub3duIFBhcmFtZXRlciBUeXBlOiBgICtcbiAgICAgICAgYEV4cGVjdGVkIHR5cGUgb2Ygc3RyaW5nLCBnb3QgJHt0eXBlb2YgYXR0cn1gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcbn07XG4iXX0=