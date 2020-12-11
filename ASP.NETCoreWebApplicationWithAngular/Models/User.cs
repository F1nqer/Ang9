using System.ComponentModel.DataAnnotations.Schema;

namespace ASP.NETCoreWebApplicationWithAngular.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public int Type { get; set; } //0 - admin 1 - client 2 - seller
        public int Age { get; set; }
        public string Password { get; set; }
        public string Info { get; set; }
    }
}