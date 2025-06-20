import type { Product } from "./ProductModel";

export interface SearchState {
  query: string;
  results: Product[];
}

export const initialSearchState: SearchState = {
  query: '',
  results: []
}; 