import {describe, it, expect} from "vitest";
import {DOMAIN_APPLICATION_MASK, DOMAIN_APPLICATION_BUILDER} from "../../src/index.js";

describe("validate application domains", () => {
  [{name: "builder domain", domain: DOMAIN_APPLICATION_BUILDER}].map(({name, domain}) => {
    it(name, () => {
      let r = 0;
      for (let i = 0; i < DOMAIN_APPLICATION_MASK.length; i++) {
        r += DOMAIN_APPLICATION_MASK[i] & domain[i];
      }
      // eslint-disable-next-line chai-expect/no-inner-compare
      expect(r > 0).toBeWithMessage(true, `${name} mask application should be valid`);
    });
  });
});
