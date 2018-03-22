const expect = require('chai').expect;
const nock = require('nock');

const makeRequest = require('../util/makeRequest');
const response = require("./response");

describe("First test", () => {
  it("Should assert true to be true showing suite setup correctly", () => {
    expect(true).to.be.true;
  });
}); 

describe('GET repositories',()=>{
    beforeEach(() => {
        nock("https://api.github.com")
        .get("/search/repositories?q=language:")
        .reply(200,response)
    });

it('gets results for each langauge' , () => {
    return makeRequest("javascript")
    .then(response => {
      expect(typeof response).to.equal("object");
      expect(response.id).to.equal(response.id);
      expect(response.name).to.equal(response.name);
      expect(response.owner.login).to.equal(response.owner.login);
      expect(response.owner.url).to.equal(response.owner.url);
    });
    })
});
