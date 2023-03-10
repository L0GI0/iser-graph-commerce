"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFragmentRegistry = void 0;
var visitor_plugin_common_1 = require("@graphql-codegen/visitor-plugin-common");
var graphql_1 = require("graphql");
var utils_1 = require("./utils");
/**
 * Used by `buildFragmentResolver` to build a mapping of fragmentNames to paths, importNames, and
 * other useful info
 */
function buildFragmentRegistry(_a, _b, schemaObject) {
    var generateFilePath = _a.generateFilePath;
    var documents = _b.documents, config = _b.config;
    var baseVisitor = new visitor_plugin_common_1.BaseVisitor(config, {
        scalars: (0, visitor_plugin_common_1.buildScalarsFromConfig)(schemaObject, config),
        dedupeOperationSuffix: (0, visitor_plugin_common_1.getConfigValue)(config.dedupeOperationSuffix, false),
        omitOperationSuffix: (0, visitor_plugin_common_1.getConfigValue)(config.omitOperationSuffix, false),
        fragmentVariablePrefix: (0, visitor_plugin_common_1.getConfigValue)(config.fragmentVariablePrefix, ''),
        fragmentVariableSuffix: (0, visitor_plugin_common_1.getConfigValue)(config.fragmentVariableSuffix, 'FragmentDoc'),
    });
    var getFragmentImports = function (possbileTypes, name) {
        var fragmentImports = [];
        fragmentImports.push({ name: baseVisitor.getFragmentVariableName(name), kind: 'document' });
        var fragmentSuffix = baseVisitor.getFragmentSuffix(name);
        if (possbileTypes.length === 1) {
            fragmentImports.push({
                name: baseVisitor.convertName(name, {
                    useTypesPrefix: true,
                    suffix: fragmentSuffix,
                }),
                kind: 'type',
            });
        }
        else if (possbileTypes.length !== 0) {
            possbileTypes.forEach(function (typeName) {
                fragmentImports.push({
                    name: baseVisitor.convertName(name, {
                        useTypesPrefix: true,
                        suffix: "_".concat(typeName, "_").concat(fragmentSuffix),
                    }),
                    kind: 'type',
                });
            });
        }
        return fragmentImports;
    };
    var duplicateFragmentNames = [];
    var registry = documents.reduce(function (prev, documentRecord) {
        var _a;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        var fragments = documentRecord.document.definitions.filter(function (d) { return d.kind === graphql_1.Kind.FRAGMENT_DEFINITION; });
        if (fragments.length > 0) {
            for (var _i = 0, fragments_1 = fragments; _i < fragments_1.length; _i++) {
                var fragment = fragments_1[_i];
                var schemaType = schemaObject.getType(fragment.typeCondition.name.value);
                if (!schemaType) {
                    throw new Error("Fragment \"".concat(fragment.name.value, "\" is set on non-existing type \"").concat(fragment.typeCondition.name.value, "\"!"));
                }
                var possibleTypes = (0, visitor_plugin_common_1.getPossibleTypes)(schemaObject, schemaType);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                var filePath = generateFilePath(documentRecord.location);
                var imports = getFragmentImports(possibleTypes.map(function (t) { return t.name; }), fragment.name.value);
                if (prev[fragment.name.value] &&
                    (0, graphql_1.print)(fragment) !== (0, graphql_1.print)(prev[fragment.name.value].node)) {
                    duplicateFragmentNames.push("".concat(prev[fragment.name.value], " ").concat(prev[fragment.name.value].filePath));
                    duplicateFragmentNames.push("".concat(fragment.name.value, " ").concat((_a = fragment.loc) === null || _a === void 0 ? void 0 : _a.source.name));
                }
                prev[fragment.name.value] = {
                    filePath: filePath,
                    imports: imports,
                    onType: fragment.typeCondition.name.value,
                    node: fragment,
                };
            }
        }
        return prev;
    }, {});
    if (duplicateFragmentNames.length) {
        throw new Error("Multiple definitions of the same fragment found at:\n".concat(duplicateFragmentNames.join('\n'), "\n\n"));
    }
    return registry;
}
exports.buildFragmentRegistry = buildFragmentRegistry;
/** Builds a fragment "resolver" that collects `externalFragments` definitions and `fragmentImportStatements` */
function buildFragmentResolver(collectorOptions, presetOptions, schemaObject) {
    var fragmentRegistry = buildFragmentRegistry(collectorOptions, presetOptions, schemaObject);
    var baseOutputDir = presetOptions.baseOutputDir;
    var baseDir = collectorOptions.baseDir, typesImport = collectorOptions.typesImport;
    function resolveFragments(generatedFilePath, documentFileContent) {
        var _a;
        var fragmentsInUse = (0, utils_1.extractExternalFragmentsInUse)(documentFileContent, fragmentRegistry);
        var externalFragments = [];
        // fragment files to import names
        var fragmentFileImports = {};
        for (var _i = 0, _b = Object.keys(fragmentsInUse); _i < _b.length; _i++) {
            var fragmentName = _b[_i];
            var level = fragmentsInUse[fragmentName];
            var fragmentDetails = fragmentRegistry[fragmentName];
            if (fragmentDetails) {
                // add top level references to the import object
                // we don't checkf or global namespace because the calling config can do so
                if (level === 0) {
                    if (fragmentFileImports[fragmentDetails.filePath] === undefined) {
                        fragmentFileImports[fragmentDetails.filePath] = fragmentDetails.imports;
                    }
                    else {
                        (_a = fragmentFileImports[fragmentDetails.filePath]).push.apply(_a, fragmentDetails.imports);
                    }
                }
                externalFragments.push({
                    level: level,
                    isExternal: true,
                    name: fragmentName,
                    onType: fragmentDetails.onType,
                    node: fragmentDetails.node,
                });
            }
        }
        return {
            externalFragments: externalFragments,
            fragmentImports: Object.entries(fragmentFileImports).map(function (_a) {
                var fragmentsFilePath = _a[0], identifiers = _a[1];
                return ({
                    baseDir: baseDir,
                    baseOutputDir: baseOutputDir,
                    outputPath: generatedFilePath,
                    importSource: {
                        path: fragmentsFilePath,
                        identifiers: identifiers,
                    },
                    emitLegacyCommonJSImports: presetOptions.config.emitLegacyCommonJSImports,
                    typesImport: typesImport,
                });
            }),
        };
    }
    return resolveFragments;
}
exports.default = buildFragmentResolver;
