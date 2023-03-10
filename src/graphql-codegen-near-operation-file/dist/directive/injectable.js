"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectableDirective = void 0;
var graphql_1 = require("graphql");
function isFragment(document) {
    var is = false;
    (0, graphql_1.visit)(document, {
        FragmentDefinition: function () {
            is = true;
        },
    });
    return is;
}
function hasInjectableDirective(document) {
    var is = false;
    (0, graphql_1.visit)(document, {
        Directive: function (node) {
            if (!is && node.name.value === 'injectable')
                is = true;
        },
    });
    return is && isFragment;
}
function hasInjectDirective(document) {
    var is = false;
    (0, graphql_1.visit)(document, {
        Directive: function (node) {
            if (!is && node.name.value === 'inject')
                is = true;
        },
    });
    return is && isFragment;
}
function throwInjectError(conf, message) {
    var _a, _b, _c;
    var val = (_a = conf.into) === null || _a === void 0 ? void 0 : _a.map(function (v) { return "\"".concat(v, "\""); });
    throw Error("".concat(message, "\n  fragment ").concat((_b = conf.fragment) === null || _b === void 0 ? void 0 : _b.name.value, " on ").concat((_c = conf.fragment) === null || _c === void 0 ? void 0 : _c.typeCondition.name.value, " @inject(into: [").concat(val, "]) { ... }"));
}
function assertValidInject(injectVal) {
    var into = injectVal.into, fragment = injectVal.fragment;
    if (!fragment || (into === null || into === void 0 ? void 0 : into.length) === 0)
        throwInjectError(injectVal, 'Invalid inject');
}
function getInjectConf(document) {
    if (!hasInjectDirective(document))
        throw Error('');
    var conf = { into: [] };
    (0, graphql_1.visit)(document, {
        Directive: function (node) {
            if (node.name.value !== 'inject')
                return false;
            (0, graphql_1.visit)(node, {
                Argument: function (arg) {
                    if (arg.name.value !== 'into')
                        return false;
                    (0, graphql_1.visit)(arg, {
                        ListValue: function (list) {
                            list.values.forEach(function (value) {
                                (0, graphql_1.visit)(value, {
                                    StringValue: function (string) {
                                        var _a;
                                        (_a = conf.into) === null || _a === void 0 ? void 0 : _a.push(string.value);
                                    },
                                });
                            });
                        },
                    });
                    return undefined;
                },
            });
            return null;
        },
        FragmentDefinition: function (node) {
            conf.fragment = node;
        },
    });
    assertValidInject(conf);
    return conf;
}
function injectInjectable(injectables, injector) {
    var injectVal = getInjectConf(injector);
    var into = injectVal.into, fragment = injectVal.fragment;
    into.forEach(function (target) {
        var found = false;
        injectables.forEach(function (injectable) {
            (0, graphql_1.visit)(injectable, {
                FragmentDefinition: function (frag) {
                    if (frag.name.value === target) {
                        found = true;
                        var spread = {
                            kind: graphql_1.Kind.FRAGMENT_SPREAD,
                            name: { kind: graphql_1.Kind.NAME, value: fragment.name.value },
                        };
                        frag.selectionSet.selections = __spreadArray(__spreadArray([], frag.selectionSet.selections, true), [spread], false);
                    }
                },
            });
        });
        if (!found)
            throwInjectError(injectVal, "fragment ".concat(target, " @injectable { ... } can not be found or isn't injectable"));
    });
}
function injectableDirective(documentFiles) {
    var documents = documentFiles
        .map(function (_a) {
        var document = _a.document;
        return document;
    })
        .filter(function (doc) { return doc; });
    var injectables = documents.filter(function (d) { return isFragment(d) && hasInjectableDirective(d); });
    var injectors = documents.filter(function (d) { return isFragment(d) && hasInjectDirective(d); });
    injectors.forEach(function (d) { return injectInjectable(injectables, d); });
    return documentFiles;
}
exports.injectableDirective = injectableDirective;
