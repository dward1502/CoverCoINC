import {
  TABLE_OPTIONS,
  LINEN_LAUNDRY_COST_PER_TABLE_PER_EVENT,
  LINENLESS_SETUP_TIME_REDUCTION,
  LINEN_CLOTHS_PER_TABLE,
  LINEN_CLOTH_COST,
} from "@/data/roiTables";
import type { RoiInputs, RoiResults } from "@/types/roi";

const WEEKS_PER_MONTH = 4.33;
const WEEKS_PER_YEAR = 52;

export function calculateRoi(inputs: RoiInputs): RoiResults {
  const { tableIndex, numTables, eventsPerWeek, staffCount, setupHours, hourlyWage } = inputs;
  const tablePrice = TABLE_OPTIONS[tableIndex].price;
  const investment = tablePrice * numTables;

  const linenPerEventCost =
    LINEN_LAUNDRY_COST_PER_TABLE_PER_EVENT + LINEN_CLOTH_COST * LINEN_CLOTHS_PER_TABLE * 0.05;
  const laundryWithLinen_weekly = numTables * eventsPerWeek * linenPerEventCost;
  const laundryWithLinen_monthly = laundryWithLinen_weekly * WEEKS_PER_MONTH;
  const laundryWithLinen_annual = laundryWithLinen_weekly * WEEKS_PER_YEAR;

  const setupWithLinen_weekly = staffCount * setupHours * hourlyWage * eventsPerWeek;
  const setupWithLinen_monthly = setupWithLinen_weekly * WEEKS_PER_MONTH;
  const setupWithLinen_annual = setupWithLinen_weekly * WEEKS_PER_YEAR;
  const setupLinenless_weekly = setupWithLinen_weekly * (1 - LINENLESS_SETUP_TIME_REDUCTION);
  const setupLinenless_monthly = setupLinenless_weekly * WEEKS_PER_MONTH;
  const setupLinenless_annual = setupLinenless_weekly * WEEKS_PER_YEAR;

  const laundrySavings_weekly = laundryWithLinen_weekly;
  const laundrySavings_monthly = laundryWithLinen_monthly;
  const laundrySavings_annual = laundryWithLinen_annual;
  const setupSavings_weekly = setupWithLinen_weekly - setupLinenless_weekly;
  const setupSavings_monthly = setupWithLinen_monthly - setupLinenless_monthly;
  const setupSavings_annual = setupWithLinen_annual - setupLinenless_annual;

  const totalSavings_weekly = laundrySavings_weekly + setupSavings_weekly;
  const totalSavings_monthly = laundrySavings_monthly + setupSavings_monthly;
  const totalSavings_annual = laundrySavings_annual + setupSavings_annual;

  const roiMonths = totalSavings_annual > 0 ? (investment / totalSavings_annual) * 12 : Infinity;

  return {
    investment,
    roiMonths,
    laundryWithLinen_weekly,
    laundryWithLinen_monthly,
    laundryWithLinen_annual,
    laundryLinenless_weekly: 0,
    laundryLinenless_monthly: 0,
    laundryLinenless_annual: 0,
    laundrySavings_weekly,
    laundrySavings_monthly,
    laundrySavings_annual,
    setupWithLinen_weekly,
    setupWithLinen_monthly,
    setupWithLinen_annual,
    setupLinenless_weekly,
    setupLinenless_monthly,
    setupLinenless_annual,
    setupSavings_weekly,
    setupSavings_monthly,
    setupSavings_annual,
    totalSavings_weekly,
    totalSavings_monthly,
    totalSavings_annual,
  };
}
