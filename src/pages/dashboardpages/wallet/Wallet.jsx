import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Coins, TrendingUp, DollarSign, Settings } from "lucide-react"

const Wallet = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10

    // Sample wallet stats data
    const walletStats = [
        {
            title: "Total Balance",
            value: "$24.30",
            icon: Coins,
            color: "bg-orange-500",
        },
        {
            title: "Total Landlord",
            value: "6",
            icon: TrendingUp,
            color: "bg-teal-500",
        },
        {
            title: "Total Contractor",
            value: "$24.30",
            icon: DollarSign,
            color: "bg-green-500",
        },
        {
            title: "Withdrawable Amount",
            value: "$24.30",
            icon: Settings,
            color: "bg-blue-500",
        },
    ]

    // Sample withdraw request data
    const withdrawRequests = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        name: "Chris smith",
        email: "info@gmail.com",
        accountNo: "info@gmail.com",
        date: "9-10-2024",
        amount: "$200",
        status: "Paid",
    }))

    const totalPages = Math.ceil(withdrawRequests.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const currentItems = withdrawRequests.slice(startIndex, startIndex + itemsPerPage)

    return (
        <div className=" ">
            <div className=" mx-auto space-y-5">
                <h1 className="text-2xl font-semibold text-gray-900">Wallet</h1>

                {/* Wallet Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {walletStats.map((stat, index) => (
                        <Card key={index} className="bg-white shadow-sm">
                            <CardContent className="">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                    </div>
                                    <div className={`${stat.color} p-3 rounded-lg`}>
                                        <stat.icon className="h-6 w-6 text-white" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Withdraw Request Table */}

                <CardHeader className=" text-black">
                    <CardTitle className="text-lg font-semibold">Withdraw Request</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-orange-500 hover:bg-orange-500">
                                <TableHead className="text-white font-semibold text-center">Name</TableHead>
                                <TableHead className="text-white font-semibold text-center">Email</TableHead>
                                <TableHead className="text-white font-semibold text-center">Account No.</TableHead>
                                <TableHead className="text-white font-semibold text-center">Date</TableHead>
                                <TableHead className="text-white font-semibold text-center">Amount</TableHead>
                                <TableHead className="text-white font-semibold text-center">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentItems.map((request) => (
                                <TableRow key={request.id} className="hover:bg-gray-50">
                                    <TableCell className="font-medium text-center">{request.name}</TableCell>
                                    <TableCell className="text-center">{request.email}</TableCell>
                                    <TableCell className="text-center">{request.accountNo}</TableCell>
                                    <TableCell className="text-center">{request.date}</TableCell>
                                    <TableCell className="font-semibold text-center">{request.amount}</TableCell>
                                    <TableCell className="text-center">
                                        <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full mx-auto">
                                            {request.status}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {/* Pagination */}
                    <div className="flex items-center justify-center space-x-2 p-4 border-t">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1"
                        >
                            Previous
                        </Button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <Button
                                key={page}
                                variant={currentPage === page ? "default" : "outline"}
                                size="sm"
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 ${currentPage === page ? "bg-orange-500 hover:bg-orange-600 text-white" : "hover:bg-gray-100"
                                    }`}
                            >
                                {page}
                            </Button>
                        ))}

                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1"
                        >
                            Next
                        </Button>
                    </div>
                </CardContent>

            </div>
        </div>
    )
}

export default Wallet