import { convert } from "./convert";

describe("convert", () => {
  describe("ciphers", () => {
    describe("jewish", () => {
      it("calculates the correct values", () => {
        const output = convert("Peace Symbol", {
          cipher: "jewish",
        });

        expect(output.total).toBe(666);

        expect(output.values).toEqual([
          {
            value: [
              { char: "P", value: 60 },
              { char: "e", value: 5 },
              { char: "a", value: 1 },
              { char: "c", value: 3 },
              { char: "e", value: 5 },
            ],
            total: 74,
          },
          {
            value: [
              { char: "S", value: 90 },
              { char: "y", value: 400 },
              { char: "m", value: 30 },
              { char: "b", value: 2 },
              { char: "o", value: 50 },
              { char: "l", value: 20 },
            ],
            total: 592,
          },
        ]);
      });
    });

    describe("english ordinal", () => {
      it("calculates the correct values", () => {
        const output = convert("Peace Symbol", {
          cipher: "englishOrdinal",
        });

        expect(output.total).toBe(116);

        expect(output.values).toEqual([
          {
            value: [
              { char: "P", value: 16 },
              { char: "e", value: 5 },
              { char: "a", value: 1 },
              { char: "c", value: 3 },
              { char: "e", value: 5 },
            ],
            total: 30,
          },
          {
            value: [
              { char: "S", value: 19 },
              { char: "y", value: 25 },
              { char: "m", value: 13 },
              { char: "b", value: 2 },
              { char: "o", value: 15 },
              { char: "l", value: 12 },
            ],
            total: 86,
          },
        ]);
      });
    });

    describe("english", () => {
      it("calculates the correct values", () => {
        const output = convert("Peace Symbol", {
          cipher: "english",
        });

        expect(output.total).toBe(696);

        expect(output.values).toEqual([
          {
            value: [
              { char: "P", value: 96 },
              { char: "e", value: 30 },
              { char: "a", value: 6 },
              { char: "c", value: 18 },
              { char: "e", value: 30 },
            ],
            total: 180,
          },
          {
            value: [
              { char: "S", value: 114 },
              { char: "y", value: 150 },
              { char: "m", value: 78 },
              { char: "b", value: 12 },
              { char: "o", value: 90 },
              { char: "l", value: 72 },
            ],
            total: 516,
          },
        ]);
      });
    });
  });
});
