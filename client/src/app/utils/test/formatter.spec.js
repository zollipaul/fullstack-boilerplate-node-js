import each from "lodash/each";
import formatter from "../formatter";
import { assert } from "chai";
const moneyFixtures = require("./money.fixture");
const dateFixtures = require("./date.fixture");

// All browser implements date and money formatting differently.

describe.skip("Formatter", function() {
  describe("money", function() {
    it("1000 usd", () => {
      assert.equal(formatter("en").money("1000", "USD"), "$1,000.00");
    });
    it("setLocale", () => {
      const fmt = formatter("en");
      fmt.setLocale("fr");
      assert.equal(fmt.money("1000", "EUR"), "1 000,00 €");
    });
    it("all locales", () => {
      each(moneyFixtures.default, (fixtures, locale) => {
        each(fixtures, fixture => {
          const [amount, currency, result] = fixture;
          assert.equal(formatter(locale).money(amount, currency), result);
        });
      });
    });
  });
  describe("date", function() {
    it("2016-08-02", () => {
      assert.equal(formatter("en").dateTime("2016-08-02"), "Aug 2, 2016");
    });
    it("all locales", () => {
      each(dateFixtures.default, (fixtures, locale) => {
        each(fixtures, fixture => {
          const [dateISO, result] = fixture;
          assert.equal(formatter(locale).dateTime(dateISO), result);
        });
      });
    });
  });
});
