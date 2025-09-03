
import { useState } from "react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Eye, X } from "lucide-react"

const tenantData = [
  {
    id: "01",
    name: "Arnold",
    email: "info@hosting.com",
    address: "Gauteng, Boulders Beach, Cape Town",
    joinDate: "02-22-2024",
    endDate: "02-22-2024",
    avatar: "/thoughtful-man.png",
  },
  ...Array.from({ length: 20 }, (_, i) => ({
    id: String(i + 2).padStart(2, "0"),
    name: "Arnold",
    email: "info@hosting.com",
    address: "Gauteng, Boulders Beach, Cape Town",
    joinDate: "02-22-2024",
    endDate: "02-22-2024",
    avatar: "/thoughtful-man.png",
  })),
]

export default function AllUsers() {
  const [selectedTenant, setSelectedTenant] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 13

  const handleActionClick = (tenant) => {
    setSelectedTenant(tenant)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedTenant(null)
  }

  const totalPages = Math.ceil(tenantData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentData = tenantData.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="">
      <div className="">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold text-gray-900">All Users</h1>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="bg-orange-500 hover:bg-orange-500">
              <TableHead className="text-white font-semibold text-center">ID</TableHead>
              <TableHead className="text-white font-semibold text-center">Tenant Name</TableHead>
              <TableHead className="text-white font-semibold text-center">Email</TableHead>
              <TableHead className="text-white font-semibold text-center">Address</TableHead>
              <TableHead className="text-white font-semibold text-center">Join Date</TableHead>
              <TableHead className="text-white font-semibold text-center">End Date</TableHead>
              <TableHead className="text-white font-semibold text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((tenant) => (
              <TableRow key={tenant.id} className="hover:bg-gray-50">
                <TableCell className="font-medium text-center">{tenant.id}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={tenant.avatar || "/placeholder.svg"} alt={tenant.name} />
                      <AvatarFallback>{tenant.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{tenant.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">{tenant.email}</TableCell>
                <TableCell className="text-center">{tenant.address}</TableCell>
                <TableCell className="text-center">{tenant.joinDate}</TableCell>
                <TableCell className="text-center">{tenant.endDate}</TableCell>
                <TableCell className="text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 w-8  text-orange-500 hover:bg-orange-50 bg-transparent mx-auto"
                    onClick={() => handleActionClick(tenant)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Centered Pagination */}
      <div className="flex items-center justify-center border-t px-6 py-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>

          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
              const page = i + 1
              return (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  className={currentPage === page ? "bg-orange-500 hover:bg-orange-600" : ""}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              )
            })}
            {totalPages > 7 && (
              <>
                <span className="px-2">...</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(totalPages)}
                >
                  {totalPages}
                </Button>
              </>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>


        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="bg-[#1A1F36] text-white border-gray-700 max-w-md">
            <DialogHeader className="relative">

              <DialogTitle className="text-center text-lg font-semibold">Tenant Details</DialogTitle>
            </DialogHeader>

            {selectedTenant && (
              <div className="space-y-6 pt-4">
                <div className="flex justify-center">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={selectedTenant.avatar || "/placeholder.svg"} alt={selectedTenant.name} />
                    <AvatarFallback className="text-2xl">{selectedTenant.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400">Date:</label>
                    <p className="text-white">{selectedTenant.joinDate}</p>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Tenant Name:</label>
                    <p className="text-white">Godwin Aruna</p>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Email:</label>
                    <p className="text-white">{selectedTenant.email}</p>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Address:</label>
                    <p className="text-white">{selectedTenant.address}</p>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400">Action:</label>
                    <Button className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white">Block</Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}