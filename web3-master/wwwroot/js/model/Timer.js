export default class Timer{
    constructor(){
        this.timerVue = new Vue({ 
            el: '#timer',
            data: {
                minutesString: '00',
                secondsString: '00',
            }
        });

        this.timerName = new Vue({
            el: '#inputSpan',
            data: {
                name: "Enter timer name"
            }
        });
        this.name = "New timer1";
        this.seconds = 0;
        this.minutes = 0;
        this.started = false;
    }

    start(){
        this.started = true;
        this.timer = setInterval(() => {
            this.addSecond();
        }, 1000);   
    }

    stop(){
        this.started = false;
        clearInterval(this.timer);
    }

    clear(){
        this.seconds = 0;
        this.minutes = 0;
        this.secondsString();
        this.minutesString();
        this.started = false;
        clearInterval(this.timer);
    }

    save(){
        this.name = this.timerName.name; 
    }

    minutesString(){
        if(this.minutes < 10){
            this.timerVue.minutesString = '0' + this.minutes;
            return;
        }
        this.timerVue.minutesString = '' + this.minutes;
    }

    secondsString(){
        if(this.seconds < 10){
            this.timerVue.secondsString = '0' + this.seconds;
            return;
        }
        this.timerVue.secondsString = '' + this.seconds;
    }
    
    addSecond(){
        if(this.seconds === 59){
            this.seconds = 0;
            this.secondsString();
            this.addMinutes();
            return;
        }
        this.seconds++;
        this.secondsString();
    }

    addMinutes(){
        if(this.minutes === 59){
            this.minutes = 0;
            this.minutesString();
            return;
        }
        this.minutes++;
    }
}