using System.Collections.Generic;
using System.Linq;
using ASP.NETCoreWebApplicationWithAngular.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplicationWithAngular.Controllers
{
    [ApiController]
    [Route("api/orders")]
    public class OrdersController : Controller
    {
        ApplicationContext db;
        public OrdersController(ApplicationContext context)
        {
            db = context;
            // if (!db.Orders.Any())
            // {
            //     // User check = db.Users.FirstOrDefault();
            //     var book = db.Books.FirstOrDefault();
            //     var order = new Order
            //         {OrderID = 1, City = "Almaty", Street = "keremet k.", HomeNum = 3, Status = "bought"};
            //     db.OrdersBooks.Add(new OrdersBooks {Order = order, Book = book});
            //     db.Orders.Add(new Order{City = "Almaty", Street = "keremet k.", HomeNum = 3, Status = "bought"});
            //     
            //     db.SaveChanges();
            // }
        }
        [HttpGet]
        public IEnumerable<Order> Get()
        {
            var or = db.Orders.Include(o=>o.User).ToList();
            // foreach (var o in or)
            // {
            //     db.OrdersBooks.Where(p=>p.OrderID==o.OrderID).Load();
            //     foreach (var ob in o.)
            // }
            //
            var ob = db.OrdersBooks.Include(o => o.Book).ToList();
            // foreach (var o in or)
            // {
            //     foreach (var obc in ob)
            //     {
            //         if (o.OrderID == obc.OrderID)
            //         {
            //             o.Books.Add(obc);
            //         }
            //     }
            // }
            // var users = db.Users.OrderBy(p=>p.Name);
            // for (int i = 0; i < or.Count; i++)
            // {
            //     for (int j = 0; j < ob.Count; j++)
            //     {
            //         if (or[i].OrderID == ob[j].OrderID)
            //         {
            //             or[i].Books.Add(ob[j]);
            //         }   
            //     }
            // }

            return or;
        }

        // [HttpGet("{id}")]
        // public Order Get(int id)
        // {
        //     Order product = db.Orders.FirstOrDefault(x => x.OrderID == id);
        //     return product;
        // }

        [HttpPost]
        public IActionResult Post(Order order)
        {
            if (ModelState.IsValid)
            {
                db.Orders.Add(order);
                db.SaveChanges();
                return Ok(order);
            }

            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Order order)
        {
            if (ModelState.IsValid)
            {
                db.Orders.Add(order);
                db.Update(order);
                db.SaveChanges();
                return Ok(order);
            }

            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Order order = db.Orders.FirstOrDefault(x => x.OrderID== id);
            if (order != null)
            {
                db.Orders.Remove(order);
                db.SaveChanges();
            }
            return Ok(order);
        }
    }
}