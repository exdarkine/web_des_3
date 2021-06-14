using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web3Server.Models
{
    public class Timer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Minutes { get; set; }
        public int Seconds { get; set; }
    }
}
