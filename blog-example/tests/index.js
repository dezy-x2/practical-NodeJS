const boot = require("../app").boot;
const shutdown = require("../app").shutdown;
const port = require("../app").port;
const superagent = require("superagent");
const expect = require("expect.js");

describe("server", () => {
    before(() => {
        boot();
    });
    describe("homepage", () => {
        it("should respond to GET", (done) => {
            superagent.get(`http://localhost:${port}`).end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
        });
    });
    after(() => {
        shutdown();
    });
});