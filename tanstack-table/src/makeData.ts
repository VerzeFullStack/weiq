import { faker } from '@faker-js/faker';

export type Product = {
  name: string;
  category: string;
  price: string;
  seller: string;
  subRows?: Product[];
};

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Product => {
  return {
    name: faker.commerce.productName(),
    category: faker.commerce.product(),
    price: faker.commerce.price(),
    seller: faker.person.fullName(),
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Product[] => {
    const len = lens[depth]!;
    return range(len).map((d): Product => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
