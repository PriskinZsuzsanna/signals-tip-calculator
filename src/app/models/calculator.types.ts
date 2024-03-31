export interface Button {
  amount?: number,
  customAmount?: string, 
  icon?: string,
  background?: string;
  color?: string;
}

export interface TotalRow {
  label: string,
  labelIdentifier: string,
  icon: string,
  amount: number
}