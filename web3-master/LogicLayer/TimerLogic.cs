using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web3Server.DataAccesLayer;
using Web3Server.Models;

namespace Web3Server.LogicLayer
{
    public class TimerLogic
    {
        private ApplicationContext context;
        public TimerLogic()
        {
            this.context = new ApplicationContext();
        }

        public IEnumerable<Timer> getTimerList()
        {
            return context.Timers;
        }

        public Timer getTimerById(int id)
        {
            return context.Timers.Where(x => x.Id == id).FirstOrDefault();
        }

        public void add(Timer timer)
        {
            context.Timers.Add(timer);
            context.SaveChanges();
        }

        public void delete(int id)
        {
            var timerToRemove = this.getTimerById(id);
            context.Timers.Remove(timerToRemove);
            context.SaveChanges();
        }
    }
}
