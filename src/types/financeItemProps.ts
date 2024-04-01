export interface FinanceItemProps {
  id?: string;
  position?: number;
  category: string;
  price: string | number;
  date?: string;
  currency?: string;
}
