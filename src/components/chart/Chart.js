import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "./chart.css";

import {
  AreaChart,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  ResponsiveContainer,
} from "recharts";

export const Chart = ({ setUid, user }) => {
  const occurrences = useMemo(() => {
    if (user.history.length) {
      let data = [];
      user.history.map((occ) => {
        return data.push(occ[2]);
      });

      let count = {};

      for (const element of data) {
        if (count[element]) {
          count[element] += 1;
        } else {
          count[element] = 1;
        }
      }
      return Object.entries(count);
    } else {
      return [];
    }
  }, [user.history]);

  const data = occurrences.map((occ) => {
    return { name: occ[0], veces: occ[1], amt: 0 };
  });

  return (
    <div className="chart">
      <nav className="nav">
        <ul>
          <Link to="/form">
            <li>Planificador</li>
          </Link>
          <Link to="/history">
            <li>Històrico</li>
          </Link>
          <Link to="/chart">
            <li>Gràfica</li>
          </Link>
          <li
            onClick={() => {
              setUid("");
            }}
          >
            Sal
          </li>
        </ul>
      </nav>
      <h4 style={{ textAlign: "center", margin: "3vh" }}>
        VECES / DIA
      </h4>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 50, right: 50, left: 50, bottom: 50 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#038cfc" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#038cfc" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="1%" stopColor="#038cfc" stopOpacity={1} />
              <stop offset="99%" stopColor="#038cfc" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="veces"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
