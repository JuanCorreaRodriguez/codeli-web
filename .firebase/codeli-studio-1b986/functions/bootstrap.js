const app = import(`./dist/codeli-studio/server/server.mjs`).then(server => server.app());
exports.handle = (req,res) => app.then(it => it(req,res));
