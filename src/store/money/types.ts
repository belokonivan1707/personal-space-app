// PAYLOAD TYPES

export interface UpdateExpensesPayloadType {
  id: string | undefined;
  generalID?: string | undefined;
  type?: string | undefined;
  sum?: number | undefined;
}

// Main Data Types
export interface PurchasesTypes {
  id: string;
  date: string;
  amount: number;
  comment: string | boolean;
}

export interface SubCategoryTypes {
  id: string;
  title: string;
  type: string;
  color: string;
  subTotal: number;
  purchases: PurchasesTypes[];
}

export interface CategoryTypes {
  id: string;
  title: string;
  type: string;
  color?: string;
  total: number;
  mainPurchases: PurchasesTypes[] | [];
  purchases?: PurchasesTypes[] | [];
  subcategories: SubCategoryTypes[] | [];
}

export interface ExpansesTypes {
  categories: CategoryTypes[] | [];
  loading: boolean;
  error: boolean;
}

export interface MoneyManagerState {
  money: {
    expenses: {
      categories: CategoryTypes[] | [];
      loading: boolean;
      error: boolean;
    };
  };
}

export interface MoneyManagerStore {
  moneyStore: MoneyManagerState;
}

// ACTIONS TYPES
export type ActionsType =
  | { type: 'GET_EXPENSES_DATA' }
  | { type: 'SUCCESS_EXPENSES_RESPONSE'; payload: CategoryTypes[] }
  | { type: 'ERROR_EXPENSES_REQUEST' }
  | { type: 'UPDATE_EXISTING_EXPENSES_CATEGORY'; payload: UpdateExpensesPayloadType };
