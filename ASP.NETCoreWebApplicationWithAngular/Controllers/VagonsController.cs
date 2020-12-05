using System.Collections.Generic;
using System.Linq;
using ASP.NETCoreWebApplicationWithAngular.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASP.NETCoreWebApplicationWithAngular.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class VagonsController : Controller
    {
        ApplicationContext db;

        public VagonsController(ApplicationContext context)
        {
            db = context;
            if (!db.Vagons.Any())
            {
                db.Vagons.Add(new Vagon
                    {Num = 98765431, Mannufacturer = "Hyundai", Statement = "Good", Type = "Крытый вагон"});
                db.Vagons.Add(new Vagon
                    {Num = 98765431, Mannufacturer = "Oibai", Statement = "Good", Type = "Свободный вагон"});
                db.Vagons.Add(new Vagon
                    {Num = 98765431, Mannufacturer = "Hyundai", Statement = "Good", Type = "Крытый вагон"});
                db.SaveChanges();
            }
        }

        [HttpGet]
        public IEnumerable<Vagon> Get()
        {
            return db.Vagons.ToList();
        }

        [HttpGet("{id}")]
        public Vagon Get(int id)
        {
            Vagon product = db.Vagons.FirstOrDefault(x => x.Id == id);
            return product;
        }

        [HttpPost]
        public IActionResult Post(Vagon vagon)
        {
            if (ModelState.IsValid)
            {
                db.Vagons.Add(vagon);
                db.SaveChanges();
                return Ok(vagon);
            }

            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Vagon vagon)
        {
            if (ModelState.IsValid)
            {
                db.Update(vagon);
                db.SaveChanges();
                return Ok(vagon);
            }

            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Vagon vagon = db.Vagons.FirstOrDefault(x => x.Id == id);
            if (vagon != null)
            {
                db.Vagons.Remove(vagon);
                db.SaveChanges();
            }

            return Ok(vagon);
        }
    }
}