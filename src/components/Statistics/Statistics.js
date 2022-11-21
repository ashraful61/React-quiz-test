import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const quizObj = useLoaderData();
  const { data } = quizObj;

  return (
    <div className="container p-5 text-center ">
      <h1 className="py-5">Total questions in graph</h1>

      <div className="justify-content-center d-flex">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" stackId="a" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
