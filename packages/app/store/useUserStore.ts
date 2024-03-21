import {create} from 'zustand';
import { faker } from '@faker-js/faker';

interface UserProps {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  account: Account
}

type Account = {
  accNum: number | string;
  debt: number | string;
  amount: number | string;
  rouingNum: number[];
  creditScore: number;
  riskFactorScore: number;
}

type User = {
  user: UserProps
}


// Custom hook for Zustand store
const useUserStore = create<User>((set) => ({
  user: {
    name: faker.person.firstName(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    account: {
      accNum: faker.finance.accountNumber(),
      debt: Math.floor(Math.random() * (200 - 40 + 1) + 40).toLocaleString("en-US", {
        style: 'currency', currency: 'USD'
      }),
      amount: Math.floor(Math.ceil(Number(faker.finance.amount())) * 4).toLocaleString("en-US", {
        style: 'currency', currency: 'USD'
      }).slice(1),
      rouingNum: Array.from(faker.finance.routingNumber(), char => char.charCodeAt(0) - '0'.charCodeAt(0)),
      creditScore: Math.floor(Math.random() * (850 - 300 + 1)) + 300,
      riskFactorScore: Math.floor(Math.random() * (7 - 3 + 1)) + 3
    }
  },
  setUser: (user: UserProps) => set({ user })
}));

export default useUserStore;
