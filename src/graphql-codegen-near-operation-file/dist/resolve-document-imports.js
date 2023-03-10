"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.resolveDocumentImports = void 0;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-cycle */
var path_1 = require("path");
var plugin_helpers_1 = require("@graphql-codegen/plugin-helpers");
var visitor_plugin_common_1 = require("@graphql-codegen/visitor-plugin-common");
var graphql_1 = require("graphql");
var fragment_resolver_1 = __importStar(require("./fragment-resolver"));
var utils_1 = require("./utils");
function getFragmentName(documentFile) {
    var name;
    if (!documentFile.document)
        return name;
    (0, graphql_1.visit)(documentFile.document, {
        FragmentDefinition: function (node) {
            name = node.name.value;
        },
    });
    return name;
}
/**
 * Transform the preset's provided documents into single-file generator sources, while resolving
 * fragment and user-defined imports
 *
 * Resolves user provided imports and fragment imports using the `DocumentImportResolverOptions`.
 * Does not define specific plugins, but rather returns a string[] of `importStatements` for the
 * calling plugin to make use of
 */
function resolveDocumentImports(presetOptions, schemaObject, importResolverOptions) {
    var baseOutputDir = presetOptions.baseOutputDir, documents = presetOptions.documents, pluginMap = presetOptions.pluginMap;
    var generateFilePath = importResolverOptions.generateFilePath, schemaTypesSource = importResolverOptions.schemaTypesSource, baseDir = importResolverOptions.baseDir, typesImport = importResolverOptions.typesImport;
    var resolveFragments = (0, fragment_resolver_1.default)(importResolverOptions, presetOptions, schemaObject);
    var fragmentRegistry = (0, fragment_resolver_1.buildFragmentRegistry)(importResolverOptions, presetOptions, schemaObject);
    var isRelayOptimizer = !!Object.keys(pluginMap).find(function (plugin) {
        return plugin.includes('relay-optimizer-plugin');
    });
    var resDocuments = documents.map(function (documentFile) {
        try {
            var isFragment = typeof getFragmentName(documentFile) !== 'undefined';
            if (!isFragment && isRelayOptimizer) {
                var generatedFilePath_1 = generateFilePath(documentFile.location);
                var externalFragments_1 = (0, utils_1.extractExternalFragmentsInUse)(documentFile.document, fragmentRegistry);
                // Sort the entries in the right order so fragments are defined when using
                externalFragments_1 = Object.fromEntries(Object.entries(externalFragments_1).sort(function (_a, _b) {
                    var levelA = _a[1];
                    var levelB = _b[1];
                    return levelB - levelA;
                }));
                var fragments = documents.filter(function (d) { var _a; return typeof externalFragments_1[(_a = getFragmentName(d)) !== null && _a !== void 0 ? _a : ''] !== 'undefined'; });
                var importStatements_1 = [];
                if ((0, plugin_helpers_1.isUsingTypes)(documentFile.document, [], schemaObject)) {
                    var schemaTypesImportStatement = (0, visitor_plugin_common_1.generateImportStatement)({
                        baseDir: baseDir,
                        emitLegacyCommonJSImports: presetOptions.config.emitLegacyCommonJSImports,
                        importSource: (0, visitor_plugin_common_1.resolveImportSource)(schemaTypesSource),
                        baseOutputDir: baseOutputDir,
                        outputPath: generatedFilePath_1,
                        typesImport: typesImport,
                    });
                    importStatements_1.unshift(schemaTypesImportStatement);
                }
                // const newDocument = [...fragments.map((f) => f.rawSDL), documentFile.rawSDL].join('\n')
                return {
                    filename: generatedFilePath_1,
                    documents: __spreadArray(__spreadArray([], fragments, true), [documentFile], false),
                    importStatements: importStatements_1,
                    fragmentImports: [],
                    externalFragments: [],
                };
            }
            var generatedFilePath = generateFilePath(documentFile.location);
            var importStatements = [];
            var _a = resolveFragments(generatedFilePath, documentFile.document), externalFragments = _a.externalFragments, fragmentImports = _a.fragmentImports;
            if (isRelayOptimizer ||
                (0, plugin_helpers_1.isUsingTypes)(documentFile.document, externalFragments.map(function (m) { return m.name; }), schemaObject)) {
                var schemaTypesImportStatement = (0, visitor_plugin_common_1.generateImportStatement)({
                    baseDir: baseDir,
                    importSource: (0, visitor_plugin_common_1.resolveImportSource)(schemaTypesSource),
                    emitLegacyCommonJSImports: presetOptions.config.emitLegacyCommonJSImports,
                    baseOutputDir: baseOutputDir,
                    outputPath: generatedFilePath,
                    typesImport: typesImport,
                });
                importStatements.unshift(schemaTypesImportStatement);
            }
            return {
                filename: generatedFilePath,
                documents: [documentFile],
                importStatements: importStatements,
                fragmentImports: fragmentImports,
                externalFragments: externalFragments,
            };
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("File ".concat(documentFile.location, " caused error: ").concat(e.message || e.toString()));
            }
            else {
                throw e;
            }
        }
    });
    return resDocuments.filter(function (result) {
        return result.filename.startsWith((0, path_1.resolve)(baseDir, baseOutputDir).replace(/\\/g, '/'));
    });
}
exports.resolveDocumentImports = resolveDocumentImports;
