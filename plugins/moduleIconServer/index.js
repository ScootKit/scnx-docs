const path = require('path');

// ModuleIcon.js imports "scnx-module-icon-server". Only the server build gets the real implementation, which
// writes the finished icon into the page. The browser build gets an empty stand-in, which is what keeps the icon
// registry and react-dom/server out of main.js.
module.exports = function moduleIconServer() {
    const components = path.resolve(__dirname, '../../src/components');
    return {
        name: 'module-icon-server',
        configureWebpack(config, isServer) {
            return {
                resolve: {
                    alias: {
                        'scnx-module-icon-server$': path.join(components, isServer ? 'moduleIconServer.server.js' : 'moduleIconServer.js')
                    }
                }
            };
        }
    };
};
