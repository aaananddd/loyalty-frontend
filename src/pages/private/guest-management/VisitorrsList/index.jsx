import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import ManageGuestModal from "../ManageGuestModal";

const data = [
  {
    id: 1,
    guestName: "John Doe",
    address: "123 Main Street",
    phoneNumber: "(555) 123-4567",
    checkIn: "2024-04-20",
    checkOut: "2024-04-25",
    amount: 250.0,
  },
  {
    id: 2,
    guestName: "Jane Smith",
    address: "456 Elm Street",
    phoneNumber: "(555) 987-6543",
    checkIn: "2024-04-22",
    checkOut: "2024-04-27",
    amount: 150.0,
  },
  {
    id: 3,
    guestName: "Alice Johnson",
    address: "789 Oak Avenue",
    phoneNumber: "(555) 555-1234",
    checkIn: "2024-04-18",
    checkOut: "2024-04-23",
    amount: 300.0,
  },
  {
    id: 4,
    guestName: "Bob Brown",
    address: "321 Pine Road",
    phoneNumber: "(555) 321-7890",
    checkIn: "2024-04-25",
    checkOut: "2024-04-30",
    amount: 200.0,
  },
  {
    id: 5,
    guestName: "Eva Garcia",
    address: "654 Cedar Lane",
    phoneNumber: "(555) 789-0123",
    checkIn: "2024-04-21",
    checkOut: "2024-04-26",
    amount: 350.0,
  },
  {
    id: 6,
    guestName: "Fedor Cernych",
    address: "654 Cedar Lane",
    phoneNumber: "(555) 789-0123",
    checkIn: "2024-04-21",
    checkOut: "2024-04-26",
    amount: 350.0,
  },
  {
    id: 7,
    guestName: "Roy Krishna",
    address: "654 Cedar Lane",
    phoneNumber: "(555) 789-0123",
    checkIn: "2024-04-21",
    checkOut: "2024-04-26",
    amount: 350.0,
  },
  {
    id: 8,
    guestName: "Nevil",
    address: "654 Cedar Lane",
    phoneNumber: "(555) 789-0123",
    checkIn: "2024-04-21",
    checkOut: "2024-04-26",
    amount: 350.0,
  },
];

const VisitorsList = () => {
  return (
    <div className="">
      <Card>
        <ScrollArea className="h-[62vh] w-full rounded-md border p-4 overflow-y-auto">
          <Table>
            <TableCaption></TableCaption>
            <TableHeader className="">
              <TableRow>
                <TableHead className="text-black font-bold">ID</TableHead>
                <TableHead className="text-black font-bold">
                  Guest Name
                </TableHead>
                <TableHead className="text-black font-bold">Address</TableHead>
                <TableHead className="text-black font-bold">
                  Contact Number
                </TableHead>
                <TableHead className="text-black font-bold">Check In</TableHead>
                <TableHead className="text-black font-bold">
                  Check Out
                </TableHead>
                <TableHead className="text-right text-black font-bold">
                  Amount
                </TableHead>
                <TableHead className="text-center text-black font-bold">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map(
                ({
                  id,
                  guestName,
                  address,
                  phoneNumber,
                  checkIn,
                  checkOut,
                  amount,
                }) => (
                  <TableRow key={id}>
                    <TableCell>{id}</TableCell>
                    <TableCell>{guestName}</TableCell>
                    <TableCell>{address}</TableCell>
                    <TableCell>{phoneNumber}</TableCell>
                    <TableCell>{checkIn}</TableCell>
                    <TableCell>{checkOut}</TableCell>
                    <TableCell className="text-right">
                      ${amount.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-center">
                      <ManageGuestModal id={id} guestName={guestName} />
                      <Button className="bg-red-500 ml-2 hover:bg-red-600 text-white">
                        History
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default VisitorsList;
