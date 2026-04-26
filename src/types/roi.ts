export interface TableOption {
  label: string;
  price: number;
}

export interface RoiInputs {
  tableIndex: number;
  numTables: number;
  eventsPerWeek: number;
  staffCount: number;
  setupHours: number;
  hourlyWage: number;
}

export interface RoiResults {
  investment: number;
  roiMonths: number;
  laundryWithLinen_weekly: number;
  laundryWithLinen_monthly: number;
  laundryWithLinen_annual: number;
  laundryLinenless_weekly: number;
  laundryLinenless_monthly: number;
  laundryLinenless_annual: number;
  laundrySavings_weekly: number;
  laundrySavings_monthly: number;
  laundrySavings_annual: number;
  setupWithLinen_weekly: number;
  setupWithLinen_monthly: number;
  setupWithLinen_annual: number;
  setupLinenless_weekly: number;
  setupLinenless_monthly: number;
  setupLinenless_annual: number;
  setupSavings_weekly: number;
  setupSavings_monthly: number;
  setupSavings_annual: number;
  totalSavings_weekly: number;
  totalSavings_monthly: number;
  totalSavings_annual: number;
}
