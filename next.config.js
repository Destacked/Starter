const withPlugins = require('next-compose-plugins');

/**
 * Transpile Modules
 */

const withTM = require('next-transpile-modules')([
    '@destacked/core',
    '@destacked/interface',
    '@destacked/database',
    '@destacked/blocks',
    '@destacked/members',
    '@destacked/marketing',
    '@destacked/affiliates',
]);

module.exports = withPlugins([withTM], config);
