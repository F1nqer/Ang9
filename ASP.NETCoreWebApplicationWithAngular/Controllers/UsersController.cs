using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using ASP.NETCoreWebApplicationWithAngular.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASP.NETCoreWebApplicationWithAngular.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController : Controller
    {
        ApplicationContext db;
        // GET
        public UsersController(ApplicationContext context)
        {
            db = context;
            if (!db.Users.Any())
            {
                db.Users.Add(new User
                    { Username = "Admin", Age = 19, Info = "FirstAdmin", Type = 0, Password = "RetroLOL1"}
                );
                db.Users.Add(new User
                    { Username = "Client", Age = 19, Info = "TestClient", Type = 1, Password = "RetroLOL1"}
                );
                db.Users.Add(new User
                    { Username = "Seller", Age = 19, Info = "TestSeller", Type = 2, Password = "RetroLOL1"}
                );
                db.SaveChanges();
            }
        }
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return db.Users.ToList();
        }
    }
}