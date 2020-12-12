using System.Collections.Generic;
using System.Linq;
using ASP.NETCoreWebApplicationWithAngular.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplicationWithAngular.Controllers
{
    [ApiController]
    [Route("api/bucket")]
    public class BucketBookController : Controller
    {
        ApplicationContext db;

        public BucketBookController(ApplicationContext context)
        {
            db = context;
            if (!db.BucketBooks.Any())
            {
                // User check = db.Users.FirstOrDefault();
                db.BucketBooks.Add(new BucketBook
                    {Name = "GoodBook", Author = "GoodAuthor", Description = "VeryGoodBook", Price = 1000, Count = 10, UserId = 3});
                db.BucketBooks.Add(new BucketBook
                    {Name = "GoodBook", Author = "GoodAuthor", Description = "VeryGoodBook", Price = 1000, Count = 30, UserId = 3});
                db.BucketBooks.Add(new BucketBook
                    {Name = "GoodBook", Author = "GoodAuthor", Description = "VeryGoodBook", Price = 1000, Count = 20, UserId = 3});
                db.SaveChanges();
            }
            
            // if (!db.Orders.Any())
            // {
            //     db.Vagons.Add(new Vagon
            //         {Num = 98765431, Manufacturer = "Hyundai", Statement = "Good"});
            //     db.SaveChanges();
            // }
            //
            // if (!db.Users.Any())
            // {
            //     db.Users.Add(new User
            //         { username = "Arthur", age = 19, info = "admin", type = 0, password = "RetroLOL1"});
            //     db.SaveChanges();
            // }
            // if (!db.Books.Any())
            // {
            //     db.Vagons.Add(new Vagon
            //         {Num = 98765431, Manufacturer = "Hyundai", Statement = "Good"});
            //     db.SaveChanges();
            // }
        }

        [HttpGet]
        public IEnumerable<BucketBook> Get()
        {
            return db.BucketBooks.Include(u => u.User).ToList();
        }

        [HttpGet("{id}")]
        public BucketBook Get(int id)
        {
            BucketBook product = db.BucketBooks.FirstOrDefault(x => x.BucketBookId == id);
            return product;
        }

        [HttpPost]
        public IActionResult Post(BucketBook book)
        {
            if (ModelState.IsValid)
            {
                book.UserId = 3;
                db.BucketBooks.Add(book);
                db.SaveChanges();
                return Ok(book);
            }

            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(BucketBook book)
        {
            // Book check = db.Books.FirstOrDefault(x => x.BookID== book.BookID);
            if (ModelState.IsValid)
            {
                book.UserId = 3;
                // db.Books.Add(book);
                db.Update(book);
                db.BucketBooks.Update(book);
                db.SaveChanges();
                return Ok(book);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var book = db.BucketBooks.FirstOrDefault(x => x.BucketBookId== id);
            if (book != null)
            {
                db.BucketBooks.Remove(book);
                db.SaveChanges();
            }
            return Ok(book);
        }
    }
}