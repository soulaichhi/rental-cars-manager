export interface Customer {
  id?: number;
  firstName?: string;
  lastName?: string;
  cin?: string;
  birthDay?: string;
  address?: string;
  phone?: string;
  entryDate?: string;
  exitDate?: string;
  blacklist?: boolean;
  secondDriver?: {
    firstName: string;
    lastName: string;
    birthDay: string;
    cin: string;
  };
}
