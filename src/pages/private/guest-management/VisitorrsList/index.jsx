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
    <div className="min-h-screen">
      <Card>
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow className=''>
              <TableHead className='text-black font-bold'>ID</TableHead>
              <TableHead className='text-black font-bold'>Guest Name</TableHead>
              <TableHead className='text-black font-bold'>Address</TableHead>
              <TableHead className='text-black font-bold'>Contact Number</TableHead>
              <TableHead className='text-black font-bold'>Check In</TableHead>
              <TableHead className='text-black font-bold'>Check Out</TableHead>
              <TableHead className="text-right text-black font-bold">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.guestName}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.phoneNumber}</TableCell>
                <TableCell>{row.checkIn}</TableCell>
                <TableCell>{row.checkOut}</TableCell>
                <TableCell className="text-right">
                  ${row.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default VisitorsList;
