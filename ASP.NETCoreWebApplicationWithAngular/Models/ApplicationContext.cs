using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplicationWithAngular.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Book> Books { get; set; }
        public DbSet<Book> BucketBooks { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrdersBooks> OrdersBooks { get; set; }
        

        public ApplicationContext(DbContextOptions<ApplicationContext> options) 
            : base(options)
        {
            Database.EnsureCreated();
        }

        
        // public DbSet<Order> Orders { get; set; }
        // public DbSet<Book> Books { get; set; }
    }
    
}