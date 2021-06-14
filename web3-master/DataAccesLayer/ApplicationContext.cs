using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web3Server.Models;

namespace Web3Server.DataAccesLayer
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Timer> Timers { get; set; }

        public ApplicationContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=web3serverapp;Trusted_Connection=True;");
        }
    }
}
