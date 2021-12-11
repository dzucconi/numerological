import deburr from "lodash.deburr";
import * as ciphers from "./ciphers";

export const convert = (
  input: string,
  { cipher }: { cipher: keyof typeof ciphers }
) => {
  const map = ciphers[cipher];
  const words = input.split(" ");

  const values = words.map((word) => {
    const chars = word.split("");

    const value = chars.map((char) => {
      const key = char.toLowerCase();
      const value = map[key] ?? map[deburr(key)];

      if (value === undefined) {
        return { char, value: 0 };
      }

      return { char, value };
    });

    return {
      value,
      total: value.reduce((total, { value }) => total + value, 0),
    };
  });

  return {
    values,
    total: values
      .map((value) => value.total)
      .reduce((total, value) => total + value, 0),
  };
};
