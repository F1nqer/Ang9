using System;

namespace ASP.NETCoreWebApplicationWithAngular.Models
{
    public class VagonType
    {
        public int id { get; set; }
        public int num { get; set; }
        public string Description { get; set; }

        public VagonType(int num)
        {
            this.num = num;
            correctType(num);
        }
        public void correctType(int num) {
            string check = Convert.ToString(num);
            switch (Convert.ToChar(check[0])) {
                case '2': {
                    this.Description = "Крытый грузовой вагон";
                    break;
                }
                case '3': {
                    this.Description = "Специализированный вагон";
                    break;
                }
                case '4': {
                    this.Description = "Платформа";
                    break;
                }
                case '5': {
                    this.Description = "Платформа";
                    break;
                }
                case '6': {
                    this.Description = "Полувагон";
                    break;
                }
                case '7': {
                    this.Description = "Цистерна";
                    break;
                }
                case '8': {
                    this.Description = "Изотермический вагон";
                    break;
                }
                case '9': {
                    this.Description = "Специализированный вагон";
                    break;
                }
                default: {
                    this.Description = "Неизвестный вагон";
                    break;
                }
            }
        }
    }
    
}