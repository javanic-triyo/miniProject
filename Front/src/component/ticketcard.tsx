interface TicketCardProps {
  title: string;
  price: string;
}

export default function TicketCard({ title, price }: TicketCardProps) {
  return (
    <div className="border rounded-xl shadow-sm p-4 hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-blue-600 font-bold text-xl mt-2">{price}</p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg text-sm sm:text-base">
        Buy Ticket
      </button>
    </div>
  );
}
