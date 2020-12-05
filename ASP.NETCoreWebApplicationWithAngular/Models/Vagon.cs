namespace ASP.NETCoreWebApplicationWithAngular.Models
{
    public class Vagon
    {
        public int Id { get; set; }
        public int Num { get; set; }    // название 
        public string Manufacturer { get; set; } // производитель
        public string Statement { get; set; }  // цена
        public string Type { get; set; }

        private VagonType vagontype;

        public Vagon()
        {
            this.vagontype = new VagonType(Num);
            Type = vagontype.Description;
        }
    }
}