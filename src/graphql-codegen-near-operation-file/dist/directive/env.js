"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envDirective = void 0;
var graphql_1 = require("graphql");
/**
 * Implements the env directive:
 *
 *     directive @env(if: String!) on FRAGMENT_DEFINITION
 */
function envDirective(documentFiles) {
    return documentFiles.filter(function (documentFile) {
        if (!documentFile.document)
            return true;
        var keep = true;
        documentFile.document = (0, graphql_1.visit)(documentFile.document, {
            Directive: function (node) {
                var _a, _b;
                if (node.name.value === 'env') {
                    var ifValue = (_b = (_a = node.arguments) === null || _a === void 0 ? void 0 : _a.find(function (arg) { return arg.name.value === 'if'; })) === null || _b === void 0 ? void 0 : _b.value;
                    keep = (ifValue === null || ifValue === void 0 ? void 0 : ifValue.kind) === graphql_1.Kind.STRING && typeof process.env[ifValue.value] !== 'undefined';
                    // Remove the @env directive, since it is only used here
                    return null;
                }
                return undefined;
            },
        });
        return keep;
    });
}
exports.envDirective = envDirective;
