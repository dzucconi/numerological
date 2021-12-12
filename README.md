# numerological

Gematria (/ɡəˈmeɪtriə/; Hebrew: גמטריא‎ or gimatria גימטריה, plural גמטראות or גימטריאות, gimatriot) is the practice of assigning a numerical value to a name, word or phrase according to an alphanumerical cipher. A single word can yield several values depending on the cipher which is used.

## Installation

```
yarn add numerological
```

## Usage

```tsx
import { convert } from "numerological";

const output = convert("Peace Symbol", { cipher: "englishOrdinal" });

console.log(JSON.stringify(output, null, 2));
/*
{
  "values": [
    {
      "value": [
        {
          "char": "P",
          "value": 16
        },
        {
          "char": "e",
          "value": 5
        },
        {
          "char": "a",
          "value": 1
        },
        {
          "char": "c",
          "value": 3
        },
        {
          "char": "e",
          "value": 5
        }
      ],
      "total": 30
    },
    {
      "value": [
        {
          "char": "S",
          "value": 19
        },
        {
          "char": "y",
          "value": 25
        },
        {
          "char": "m",
          "value": 13
        },
        {
          "char": "b",
          "value": 2
        },
        {
          "char": "o",
          "value": 15
        },
        {
          "char": "l",
          "value": 12
        }
      ],
      "total": 86
    }
  ],
  "total": 116
}
*/
```
