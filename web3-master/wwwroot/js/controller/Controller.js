import Timer from "../model/Timer.js";
import TimerList from "../model/TimerList.js";


export default class Controller{
    constructor(){
        this.timerModel = new Timer();
        this.timerList = new TimerList();
        this.buttonBlock = new Vue({ 
            el: '#button-block',    
            methods:{
                onStop: this.onStop.bind(this),
                onStart: this.onStart.bind(this),
                onClear: this.onClear.bind(this)
            }
        });
        this.saveButton = new Vue({
            el: '#saveButton',
            methods:{
                onSave: this.onSave.bind(this)                 
            }
        });
    }

    onStart(){        
        this.timerModel.start();
    }

    onStop(){
        this.timerModel.stop();
    }

    onSave(){
        this.timerModel.save();
        this.timerList.listVue.haveList = true;
        this.timerList.add(this.timerModel);
    }

    onClear(){
        this.timerModel.clear();
    }
}