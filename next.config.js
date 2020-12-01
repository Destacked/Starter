const withPlugins = require('next-compose-plugins');

/**
 * Transpile Modules
 */

const withTM = require('next-transpile-modules')([
    '@fireblaze/core',
    '@fireblaze/interface',
    '@fireblaze/database',
    '@fireblaze/blocks',
    '@fireblaze/members',
    '@fireblaze/marketing',
    '@fireblaze/affiliates',
]);

module.exports = withPlugins([withTM], config);
