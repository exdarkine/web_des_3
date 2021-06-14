using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web3Server.DataAccesLayer;
using Web3Server.LogicLayer;
using Web3Server.Models;

namespace Web3Server.Controllers
{
    [EnableCors]
    [ApiController]
    [Route("[controller]")]
    public class TimersController : ControllerBase
    {
        private TimerLogic _timerLogic;
        public TimersController()
        {
            this._timerLogic = new TimerLogic();
        }
        [HttpGet]
        public ActionResult<IEnumerable<Timer>> Get()
        {
            var result = _timerLogic.getTimerList();
            return Ok(result);
        }
        [HttpGet]
        [Route("/timers/{id}")]
        public ActionResult<Timer> Get(int id)
        {
            var result = _timerLogic.getTimerById(id);
            return Ok(result);
        }
        [HttpPost]
        [Route("/timers")]
        public Timer Post([FromBody] Timer timer)
        {
            _timerLogic.add(timer);
            return timer;
        }
        [HttpDelete]
        [Route("/timers/{id}")]
        public void Delete(int id)
        {
            _timerLogic.delete(id);
        }
    }
}
