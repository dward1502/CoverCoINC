"use client";

import { useState, useMemo } from "react";
import { TABLE_OPTIONS } from "@/data/roiTables";
import type { RoiInputs } from "@/types/roi";
import { calculateRoi } from "@/lib/roi";
import { formatCurrency } from "@/lib/utils";
import "./RoiCalculator.css";

export default function RoiCalculator() {
  const [inputs, setInputs] = useState<RoiInputs>({
    tableIndex: 0,
    numTables: 50,
    eventsPerWeek: 3,
    staffCount: 4,
    setupHours: 2,
    hourlyWage: 18,
  });

  const setSelect = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setInputs((prev) => ({ ...prev, tableIndex: parseInt(e.target.value) }));

  const results = useMemo(() => calculateRoi(inputs), [inputs]);

  const SliderField = ({
    label, field, min, max, step = 1, prefix = "", suffix = "", decimals = 0,
  }: {
    label: string; field: keyof RoiInputs; min: number; max: number;
    step?: number; prefix?: string; suffix?: string; decimals?: number;
  }) => {
    const val = inputs[field] as number;
    const pct = ((val - min) / (max - min)) * 100;
    const display = prefix + val.toFixed(decimals) + suffix;
    return (
      <div className="roi-slider-field">
        <div className="roi-slider-header">
          <label>{label}</label>
          <span className="roi-slider-value">{display}</span>
        </div>
        <div className="roi-slider-track">
          <div className="roi-slider-fill" style={{ width: `${pct}%` }} />
          <div className="roi-slider-thumb-overlay" style={{ left: `${pct}%` }} />
          <input
            className="roi-slider-input"
            type="range"
            min={min} max={max} step={step}
            value={val}
            onChange={(e) => setInputs((prev) => ({ ...prev, [field]: parseFloat(e.target.value) }))}
          />
        </div>
        <div className="roi-slider-range">
          <span>{prefix}{min}{suffix}</span>
          <span>{prefix}{max}{suffix}</span>
        </div>
      </div>
    );
  };

  const roiDisplay = isFinite(results.roiMonths)
    ? `${results.roiMonths.toFixed(1)} mo`
    : "N/A";

  return (
    <div className="roi-root">
      <div className="roi-hero">
        <p className="roi-hero-eyebrow">Linenless Solutions</p>
        <h1>Calculate Your Linenless Savings</h1>
        <p>
          Table linens and their associated laundry, labor, and water expenses are costly to any business.
          This model illustrates the operational savings when investing in linenless tables — and your
          return on investment over time. Co-developed with hospitality industry experts.
        </p>
      </div>

      <div className="roi-body">
        <div className="roi-input-card">
          <div className="roi-section-label">Configuration</div>
          <h2>Enter Your Business Details</h2>

          <div className="roi-field">
            <label>Table Size and Style</label>
            <select value={inputs.tableIndex} onChange={setSelect}>
              {TABLE_OPTIONS.map((t, i) => (
                <option key={i} value={i}>{t.label} — {formatCurrency(t.price)}/table</option>
              ))}
            </select>
          </div>

          <div className="roi-grid-2">
            <SliderField label="Number of Tables"              field="numTables"     min={1}   max={500} step={1}   />
            <SliderField label="Number of Events per Week"     field="eventsPerWeek" min={1}   max={21}  step={1}   />
            <SliderField label="Staff Required for Setup"      field="staffCount"    min={1}   max={20}  step={1}   />
            <SliderField label="Time (hours) per Setup"        field="setupHours"    min={0.5} max={12}  step={0.5} decimals={1} />
            <SliderField label="Hourly Wage"                   field="hourlyWage"    min={10}  max={75}  step={0.5} prefix="$" decimals={2} />
          </div>
        </div>

        <div className="roi-section-label roi-section-label-spaced">Return on Investment</div>
        <div className="roi-summary">
          <div className="roi-metric">
            <div className="roi-metric-label">Investment</div>
            <div className="roi-metric-value">{formatCurrency(results.investment)}</div>
          </div>
          <div className="roi-metric">
            <div className="roi-metric-label">Annual Savings</div>
            <div className="roi-metric-value">{formatCurrency(results.totalSavings_annual)}</div>
          </div>
          <div className="roi-metric">
            <div className="roi-metric-label">ROI in Months</div>
            <div className="roi-metric-value">{roiDisplay}</div>
          </div>
        </div>

        <div className="roi-section-label roi-section-label-spaced">Operational Expense Savings</div>
        <div className="roi-oes-card">
          <div className="roi-oes-header">
            <h2>OES Breakdown</h2>
            <span>Weekly · Monthly · Annually</span>
          </div>
          <table className="roi-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Weekly</th>
                <th>Monthly</th>
                <th>Annually</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Laundry Costs (Table &amp; Linen)</td>
                <td>{formatCurrency(results.laundryWithLinen_weekly)}</td>
                <td>{formatCurrency(results.laundryWithLinen_monthly)}</td>
                <td>{formatCurrency(results.laundryWithLinen_annual)}</td>
              </tr>
              <tr>
                <td>Laundry Costs (Linenless Tables)</td>
                <td className="zero">$0</td>
                <td className="zero">$0</td>
                <td className="zero">$0</td>
              </tr>
              <tr className="savings-row">
                <td>Laundry Savings</td>
                <td className="positive">{formatCurrency(results.laundrySavings_weekly)}</td>
                <td className="positive">{formatCurrency(results.laundrySavings_monthly)}</td>
                <td className="positive">{formatCurrency(results.laundrySavings_annual)}</td>
              </tr>

              <tr>
                <td>Set Up Costs (Table &amp; Linen)</td>
                <td>{formatCurrency(results.setupWithLinen_weekly)}</td>
                <td>{formatCurrency(results.setupWithLinen_monthly)}</td>
                <td>{formatCurrency(results.setupWithLinen_annual)}</td>
              </tr>
              <tr>
                <td>Set Up Costs (Linenless Tables)</td>
                <td>{formatCurrency(results.setupLinenless_weekly)}</td>
                <td>{formatCurrency(results.setupLinenless_monthly)}</td>
                <td>{formatCurrency(results.setupLinenless_annual)}</td>
              </tr>
              <tr className="savings-row">
                <td>Set Up Savings</td>
                <td className="positive">{formatCurrency(results.setupSavings_weekly)}</td>
                <td className="positive">{formatCurrency(results.setupSavings_monthly)}</td>
                <td className="positive">{formatCurrency(results.setupSavings_annual)}</td>
              </tr>

              <tr className="total-row">
                <td>Total Savings of Linenless Tables</td>
                <td>{formatCurrency(results.totalSavings_weekly)}</td>
                <td>{formatCurrency(results.totalSavings_monthly)}</td>
                <td>{formatCurrency(results.totalSavings_annual)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="roi-footnote">
          <strong>Methodology note:</strong> Laundry savings are calculated using industry-standard rates of $4.50/table/event for wash, press, and storage. Setup labor savings assume a 40% reduction in setup time when linens are eliminated. Linen amortization assumes $12/linen replacement cycle. Data and calculations were co-developed with hospitality industry experts to ensure factual accuracy in operational scenarios.
        </div>
      </div>
    </div>
  );
}
