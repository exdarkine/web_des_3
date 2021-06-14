import Timer from "./Timer.js";

export default class TimerList{
    constructor(){
        this.listVue = new Vue({
            el: '#list',
            data: {
              haveList: ()=>{
                  if(data !== []){
                      return true;
                  }
                  return false;
              },
              items: []
            }
        });
        this.getList();
    }

    add(item){
        this.listVue.items.push({...item});
        console.log("post");
        axios
            .post('http://localhost:5001/timers/',{
                "name":item.name,
                "seconds":item.seconds,
                "minutes":item.minutes
            });
        console.log(item);
        console.log("post");
    }

    delete(itemId){
        const itemIndex = this.items.findIndex( (item) => item.id === itemId); 
        this.items.splice(itemIndex, 1);
    }

    getList(){
        console.log("getlist");
        axios.get('http://localhost:5000/timers/')
        .then((response) => {
            this.listVue.items = response.data;
            console.log(response.data);
        });
    }
}