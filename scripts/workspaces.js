const cp = require('child_process');
const fs = require('fs');
const workspacesPayload = JSON.stringify(JSON.parse(cp.execSync('yarn workspaces info').toString()));
fs.writeFileSync('workspaces.js',`module.exports = ${workspacesPayload};`);
