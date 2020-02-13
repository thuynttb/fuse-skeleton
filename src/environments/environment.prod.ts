const env = require('../../.env.json');

export const environment = {
    production: true,
    hmr: false,
    ...env,
};
