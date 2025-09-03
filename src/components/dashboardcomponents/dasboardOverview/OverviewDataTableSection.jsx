import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

const tableData = [
  { id: "5", name: "Aumi Sharif", email: "Aumisharif@gmail.com" },
  { id: "5", name: "Aumi Sharif", email: "Aumisharif@gmail.com" },
  { id: "5", name: "Aumi Sharif", email: "Aumisharif@gmail.com" },
  { id: "5", name: "Aumi Sharif", email: "Aumisharif@gmail.com" },
  { id: "5", name: "Aumi Sharif", email: "Aumisharif@gmail.com" },
];

const tables = [
  { title: "Tenant", bgColor: "bg-orange-500" },
  { title: "Mamber", bgColor: "bg-orange-500" },
  { title: "Contractor", bgColor: "bg-orange-500" },
];

export function OverviewDataTableSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
      {tables.map((table, tableIndex) => (
        <div key={tableIndex} className="bg-white">
          <CardHeader
            className={`${table.bgColor} text-white rounded-t-lg border-2`}
          >
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">
                {table.title}
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="text-[#FF6600] bg-white hover:bg-white mt-2 hover:text-[#FF6600] h-8"
              >
                Sell All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="">
            <Table className="">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">SI</TableHead>
                  <TableHead className="text-xs">{table.title} Name</TableHead>
                  <TableHead className="text-xs">Email</TableHead>
                  <TableHead className="text-xs">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-sm">{row.id}</TableCell>
                    <TableCell className="text-sm">{row.name}</TableCell>
                    <TableCell className="text-sm">{row.email}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4 text-orange-500" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </div>
      ))}
    </div>
  );
}
