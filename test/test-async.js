import chai from "chai";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);
const expect = chai.expect;

describe("chai as promised", () => {
	it("should pass resolved promises", () => {
		return expect(Promise.resolve("ok")).to.eventually.equal("ok");
	});

	it("(!) should not fail resolved promises", () => {
		return expect(Promise.resolve("ok")).to.eventually.be.rejected;
	});

	it("should fail rejected promises", () => {
		return expect(Promise.reject(new Error("fail"))).to.eventually.be.rejected;
	});

	it("(!) should fail rejected promises", () => {
		return expect(Promise.reject(new Error("fail"))).to.eventually.have.property("message", "fail");
	});
});
