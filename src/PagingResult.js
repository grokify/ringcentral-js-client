"use strict";
/**
 * PagingResult
 */
var PagingResult = (function () {
    function PagingResult(data) {
        this.records = data["records"];
        this.navigation = data["navigation"];
        this.paging = data["paging"];
    }
    return PagingResult;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PagingResult;
