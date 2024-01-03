import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      font: {
        weight: "bold",
        family: "Ubuntu",
        size: "24px",
      },
      padding: {
        bottom: 40,
      },
      text: "Web Technologies",
    },
  },
};
const labels = ["React/Next", "Express", "Laravel", "Vue"];

export const data = {
  labels,
  datasets: [
    {
      data: [5, 5, 4, 3],
      backgroundColor: "rgba(255, 166, 0, 0.5)",
    },
  ],
};

export const ThirdSection = () => {
  return (
    <section className="h-screen w-screen absolute top-200">
      <div className="w-full md:p-56 p-4 h-full flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          <Bar options={options} data={data} />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
