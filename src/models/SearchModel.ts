export interface SearchState {
  query: string;
  results: any[];
}

export const initialSearchState: SearchState = {
  query: '',
  results: []
}; 