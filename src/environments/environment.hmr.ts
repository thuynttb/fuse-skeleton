const env = require('../../.env.json');

export const environment = {
    production: false,
    hmr: true,
    ...env,
};
