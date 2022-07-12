export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export interface Report {
  id: string;
  source: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  type: ReportType.EXPENSE | ReportType.INCOME;
}

export interface Data {
  reports: Report[];
}

export const data: Report[] = [
  {
    id: '1',
    source: 'salary',
    amount: 1000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME,
  },
  {
    id: '2',
    source: 'teaching',
    amount: 10,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME,
  },
  {
    id: '3',
    source: 'rent',
    amount: 300,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.EXPENSE,
  },
];
