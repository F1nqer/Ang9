using System.Collections.Generic;
using System.Linq;
using ASP.NETCoreWebApplicationWithAngular.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASP.NETCoreWebApplicationWithAngular.Controllers
{
    [ApiController]
    [Route("api/vagons")]
    public class VagonsController : Controller
    {
        ApplicationContext db;

        public VagonsController(ApplicationContext context)
        {
            db = context;
            if (!db.Vagons.Any())
            {
                db.Vagons.Add(new Vagon
                    {Num = 98765431, Manufacturer = "Hyundai", Statement = "Good"});
                db.Vagons.Add(new Vagon
                    {Num = 98765431, Manufacturer = "Oibai", Statement = "Good"});
                db.Vagons.Add(new Vagon
                    {Num = 98765431, Manufacturer = "Hyundai", Statement = "Good"});
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
                VagonType check = new VagonType(vagon.Num);
                vagon.Type = check.Description;
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
                VagonType check = new VagonType(vagon.Num);
                vagon.Type = check.Description;
                db.Vagons.Add(vagon);
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