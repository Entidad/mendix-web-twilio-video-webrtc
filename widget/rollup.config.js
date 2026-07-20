/**
 * Extends the default Mendix pluggable-widgets-tools rollup config.
 *
 * twilio-video imports its own package.json (require("./package.json")) to read
 * its version, so the bundler needs @rollup/plugin-json. It must run before the
 * commonjs plugin so .json modules are transformed before commonjs parses them.
 */
const jsonImport = require("@rollup/plugin-json");
const json = jsonImport.default || jsonImport;

module.exports = args => {
    const defaultConfigs = args.configDefaultConfig;
    return defaultConfigs.map(config => ({
        ...config,
        plugins: [json(), ...(config.plugins || [])]
    }));
};
