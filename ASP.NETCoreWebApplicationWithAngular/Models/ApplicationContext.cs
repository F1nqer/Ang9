using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplicationWithAngular.Models
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) 
            : base(options)
        { 
            Database.EnsureCreated();
        }

        public DbSet<Vagon> Vagons { get; set; }
    }
    
}