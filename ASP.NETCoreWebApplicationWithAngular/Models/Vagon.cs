namespace ASP.NETCoreWebApplicationWithAngular.Models
{
    public class Vagon
    {
        public int Id { get; set; }
        public int Num { get; set; }    // название 
        public string Mannufacturer { get; set; } // производитель
        public string Statement { get; set; }  // цена
        public string Type { get; set; }
    }
}