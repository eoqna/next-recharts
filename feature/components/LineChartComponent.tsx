"use client";

import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { ChartData } from "recharts/types/state/chartDataSlice";

export default function LineChartComponent() {
    const data: ChartData = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];

    return (
        <div className="flex h-full align-center justify-center">
            <LineChart style={{ width: "100%", aspectRatio: 1.618, maxWidth: 800, margin: "auto" }} responsive data={data}>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                <Line type="monotone" dataKey="amt" stroke="#ff0000" />
            </LineChart>
        </div>
    );
};

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-900 flex flex-col gap-4 p-4 rounded-md">
                <p className="text-medium text-lg">{label}</p>
                <p className="text-sm text-red-400">
                    amt:
                    <span className="ml-2">{payload[0].value}</span>
                </p>
                <p className="text-sm text-green-400">
                    pv:
                    <span className="ml-2">{payload[1].value}</span>
                </p>
                <p className="text-sm text-indigo-400">
                    uv:
                    <span className="ml-2">{payload[2].value}</span>
                </p>
            </div>
        );
    }

    return null;
};