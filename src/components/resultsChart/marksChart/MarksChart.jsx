import { use } from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;
  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.physics,
      chemistry: studentData.chemistry,
      math: studentData.math,
    };
    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.avg = avg;
    return student;
  });
  return <div>
    <BarChart width={1000} height={500} data={marksChartData}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Bar dataKey={'avg'} fill="yellow"></Bar>
        <Bar dataKey={'math'} fill="blue"></Bar>
        <Bar dataKey={'physics'} fill="green"></Bar>
        <Bar dataKey={'chemistry'} fill="red"></Bar>
    </BarChart>
  </div>;
};

export default MarksChart;
