using System.ComponentModel.DataAnnotations.Schema;

namespace ASP.NETCoreWebApplicationWithAngular.Models
{
    public class Book
    {
        public int BookID { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public string Description { get; set; }
        public int Count { get; set; }
        public int Price { get; set; }
        public int UserId { get; set; } 
        public User User { get; set; }
    }
}