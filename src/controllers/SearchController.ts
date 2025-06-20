import type { SearchState } from '../models/SearchModel';

export class SearchController {
  private searchState: SearchState;
  private listeners: ((state: SearchState) => void)[] = [];
  private static instance: SearchController | null = null;

  private constructor(initialState: SearchState) {
    this.searchState = JSON.parse(JSON.stringify(initialState)); // Deep clone
  }

  static getInstance(initialState: SearchState): SearchController {
    if (!SearchController.instance) {
      SearchController.instance = new SearchController(initialState);
    }
    return SearchController.instance;
  }

  getState(): SearchState {
    return { ...this.searchState };
  }

  setQuery(query: string): void {
    if (this.searchState.query === query) return; // Tránh update không cần thiết
    
    this.searchState.query = query;
    // Giả lập kết quả tìm kiếm đơn giản
    this.searchState.results = query ? [{ id: 1, name: query, price: 0, originalPrice: 0, image: '', category: '', certification: '' }] : [];
    this.notifyListeners();
  }

  subscribe(listener: (state: SearchState) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.getState()));
  }
}

// Wrapper function để sử dụng SearchController.getInstance
export const getSearchController = (initialState: SearchState): SearchController => {
  return SearchController.getInstance(initialState);
}; 