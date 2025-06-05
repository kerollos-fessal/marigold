export interface Address {
  firstName: string;
  lastName: string;
  company?: string; 
  country: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  fullAddress?: string;
}