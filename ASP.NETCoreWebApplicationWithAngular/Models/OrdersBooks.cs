namespace ASP.NETCoreWebApplicationWithAngular.Models
{
    public class OrdersBooks
    {
        public int OrdersBooksID { get; set; }
        public int OrderID { get; set; }
        public Order Order { get; set; }
        public int BookId { get; set; }
        public Book Book { get; set; }
    }
}