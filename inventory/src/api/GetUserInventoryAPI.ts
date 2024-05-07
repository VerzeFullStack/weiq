import { faker } from '@faker-js/faker';
import { Product } from '../dataModels/Product';

const newProduct = (): Product => {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    category: faker.commerce.department(),
    inventory: faker.number.int({ min: 0, max: 20 })
  };
};

export async function getUserInventory(userId: string | undefined): Promise<Array<Product>> {
  return new Promise<Product[]>((resolve) => {
      // Simulating an asynchronous operation
      // (e.g., fetching data)
      const arr: Product[] = [];
      for(let i = 0; i < 123; i++)
      {
        arr.push(newProduct());
      }

      setTimeout(() => {
          resolve(arr);
      }, 500);
  });
}

export async function addProductToUserInventory(productId: string | undefined): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
      // Simulating an asynchronous operation
      // (e.g., fetching data)
      setTimeout(() => {
          resolve(true);
      }, 500);
  });
}