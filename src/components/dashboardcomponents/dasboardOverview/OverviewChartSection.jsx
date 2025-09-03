
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const incomeData = [
    { month: "Jan", value: 3 },
    { month: "Feb", value: 2 },
    { month: "Mar", value: 8 },
    { month: "Apr", value: 9 },
    { month: "May", value: 8 },
    { month: "Jun", value: 8 },
    { month: "Jul", value: 8 },
    { month: "Aug", value: 4 },
    { month: "Sep", value: 2 },
    { month: "Oct", value: 8 },
    { month: "Nov", value: 9 },
    { month: "Dec", value: 7 },
]

const userRatioData = [
    { name: "This Month Total Joined", value: 12457, color: "#f97316" },
    { name: "This Month Employees", value: 9457, color: "#fb923c" },
]

export function OverviewChartSection() {
    return (
        <div className="flex flex-col md:flex-row gap-6 mt-5">
            {/* Income Ratio Chart */}
            <Card className="w-full md:w-2/3 bg-white">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg font-semibold">Income Ratio</CardTitle>
                    <Select defaultValue="2024">
                        <SelectTrigger className="w-20">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2023">2023</SelectItem>
                        </SelectContent>
                    </Select>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={incomeData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Bar dataKey="value" fill="#f97316" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* User Ratio Chart */}
            <Card className="w-full md:w-1/3 ">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-lg font-semibold">User Ratio</CardTitle>
                    <Select defaultValue="february">
                        <SelectTrigger className="w-28">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="february">February</SelectItem>
                            <SelectItem value="january">January</SelectItem>
                            <SelectItem value="march">March</SelectItem>
                        </SelectContent>
                    </Select>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <ResponsiveContainer width="60%" height={200}>
                            <PieChart>
                                <Pie data={userRatioData} cx="50%" cy="50%" innerRadius={40} outerRadius={80} dataKey="value">
                                    {userRatioData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="space-y-4">
                            {userRatioData.map((item, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                    <div>
                                        <p className="text-xs text-gray-600">{item.name}</p>
                                        <p className="font-semibold">{item.value.toLocaleString()}K</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
