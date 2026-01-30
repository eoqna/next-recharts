"use client";

import {
    AreaChart, CartesianGrid,
    Area, XAxis,
    YAxis, Tooltip,
    Legend, TooltipContentProps
} from "recharts";

export default function AreaChartComponent() {
    // 차트 더미 데이터 생성
    const data = [
        { name: 'Data A', a: 4000, b: 2400, c: 2400 },
        { name: 'Data B', a: 3000, b: 1398, c: 2210 },
        { name: 'Data C', a: 2000, b: 9800, c: 2290 },
        { name: 'Data D', a: 2780, b: 3908, c: 2000 },
        { name: 'Data E', a: 1890, b: 4800, c: 2181 },
        { name: 'Data F', a: 2390, b: 3800, c: 2500 },
        { name: 'Data G', a: 3490, b: 4300, c: 2100 },
    ];

    return (
        <div className="flex h-full align-center justify-center">
            <AreaChart style={{ aspectRatio: 1.618, maxWidth: 800, margin: "auto" }} width="100%" responsive data={data}>
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis width="auto" />
                <Legend />
                {/* <Tooltip /> */}
                <Tooltip content={CustomTooltip} />
                <Area type="monotone" dataKey="a" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="b" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="c" stroke="#ff0000" fill="#ff0000" />
            </AreaChart>
        </div>
    );
};

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }: TooltipContentProps<number, string>) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-900 flex flex-col gap-4 p-4 rounded-md">
                <p className="text-medium text-lg">{label}</p>
                <p className="text-sm text-red-400">
                    a:
                    <span className="ml-2">{payload[0].value}</span>
                </p>
                <p className="text-sm text-green-400">
                    b:
                    <span className="ml-2">{payload[1].value}</span>
                </p>
                <p className="text-sm text-indigo-400">
                    c:
                    <span className="ml-2">{payload[2].value}</span>
                </p>
            </div>
        );
    }

    return null;
};