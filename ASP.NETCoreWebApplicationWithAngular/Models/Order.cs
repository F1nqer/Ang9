using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Dynamic;

namespace ASP.NETCoreWebApplicationWithAngular.Models
{
    public class Order
    {
        public int OrderID { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public int HomeNum { get; set; }
        public string Status { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public List<OrdersBooks> Books = new List<OrdersBooks>();
    }
}