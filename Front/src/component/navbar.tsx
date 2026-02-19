const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 border-b">
      <h1 className="text-2xl font-bold">TicketPurwha</h1>
      <div className="hidden sm:flex gap-6 text-sm font-medium">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/tickets">Tickets</a>
      </div>
    </nav>
  );
};

export default Navbar;
