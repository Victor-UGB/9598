// This file contains typescript object definitions.
// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.

export type User = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type Collection = {
    id: string,
    name: string,
    description: string,
    image_url: string,
    video_url: string
}

export type Wear = {
    id: string,
    name: string,
    description: string,
    color: string,
    size: string,
    price: number,
    availability: 'in-stock' | 'out-of-stock',
    image_url: string,
    collection_id : string,
}

export type Invoice = {
    id: string;
    customer_id: string;
    amount: number;
    date: string;
    status: 'pending' | 'paid';
  };

export type Order = {
    id: string;
    customer_id: string;
    items: string[],
    amount: number;
    date: string;
    status: 'enroute' | 'delivered';
}