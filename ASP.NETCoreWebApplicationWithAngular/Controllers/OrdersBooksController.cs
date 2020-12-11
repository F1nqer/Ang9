using System.Collections.Generic;
using System.Linq;
using ASP.NETCoreWebApplicationWithAngular.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplicationWithAngular.Controllers
{
    [ApiController]
    [Route("api/ordersbooks")]
    public class OrdersBooksController : Controller
    {
        ApplicationContext db;

        public OrdersBooksController(ApplicationContext context)
        {
            db = context;
            
        }

        [HttpGet]
        public IEnumerable<OrdersBooks> Get()
        {
            return db.OrdersBooks.Include(u => u.Book).ToList();
        }

        // [HttpGet("{id}")]
        // public Book Get(int id)
        // {
        //     Book product = db.Books.FirstOrDefault(x => x.BookID == id);
        //     return product;
        // }

        [HttpPost]
        public IActionResult Post(OrdersBooks ob)
        {
            if (ModelState.IsValid)
            {
                db.OrdersBooks.Add(ob);
                db.SaveChanges();
                return Ok(ob);
            }

            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(OrdersBooks ob)
        {
            // Book check = db.Books.FirstOrDefault(x => x.BookID== book.BookID);
            if (ModelState.IsValid)
            {
                
                // db.Books.Add(book);
                db.Update(ob);
                db.OrdersBooks.Update(ob);
                db.SaveChanges();
                return Ok(ob);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var ob = db.OrdersBooks.FirstOrDefault(x => x.OrdersBooksID== id);
            if (ob != null)
            {
                db.OrdersBooks.Remove(ob);
                db.SaveChanges();
            }
            return Ok(ob);
        }
        
    }
}