import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useUnit } from "effector-react";
import { $expensesByCategory } from "../../model/financeItemsModel/financeItemsModel";

// Регистрация необходимых компонентов для Doughnut диаграммы
Chart.register(ArcElement, Tooltip, Legend);

export const ExpensesDoughnutChart: React.FC = () => {
  const expensesByCategory = useUnit($expensesByCategory);

  const data = {
    labels: Object.keys(expensesByCategory),
    datasets: [
      {
        label: "Распределение трат по категориям",
        data: Object.values(expensesByCategory),
        backgroundColor: [
          "#f25555",
          "#8aa170",
          "#e4d5ed",
          "#2a3b45",
          "#d98716",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return Object.keys(expensesByCategory).length ? (
    <div style={{ width: "300px", height: "300px", margin: "80px 0 0" }}>
      <Doughnut data={data} options={options} />
    </div>
  ) : null;
};
