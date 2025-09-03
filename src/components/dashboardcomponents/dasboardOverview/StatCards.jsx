import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Users, Building, HardHat } from "lucide-react"

const stats = [
    {
        title: "Total Earnings",
        value: "$24.30",
        icon: DollarSign,
        bgColor: "bg-orange-500",
    },
    {
        title: "Total Tenant",
        value: "1200",
        icon: Users,
        bgColor: "bg-teal-500",
    },
    {
        title: "Total Landlord",
        value: "210",
        icon: Building,
        bgColor: "bg-green-500",
    },
    {
        title: "Total Contractor",
        value: "400",
        icon: HardHat,
        bgColor: "bg-blue-500",
    },
]

export function StatCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <Card key={index} className="bg-white">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            </div>
                            <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                                <stat.icon className="h-6 w-6 text-white" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}