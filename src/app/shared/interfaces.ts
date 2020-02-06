export interface ICustomer {
  id: number;
  name: string;
  city: string;
  // the question mark means that it is optional
  orderTotal?: number;
  customerSince: any;
}

export interface IOrder {
  customerId: number;
  orderItems: IOrderItem[];
}

export interface IOrderItem {
  id: number;
  productName: string;
  itemCost: number;
}

/* interfaces are a typescript feature 
  interfaces have an I in front of them */
/* these help us for better compiler support */