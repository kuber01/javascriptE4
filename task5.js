class kitchenTools {
    constructor(name, status, power){
        this.name = name;
        this.status = status;
        this.power = power;
    }
    pwr(power){
        this.power = power;
        console.log(`The power of ${this.name} is ${this.power} v`);
    }
    on_off(status){
        if (status == 'on') {
            console.log(`${this.name} is turned on`)
        }else {
            console.log(`${this.name} is turned off`)
        }
    } 
}

class mixer extends kitchenTools{
    constructor(name, status, power, factory){
        super(name, status, power);
        this.factory = factory;
        console.log(`${this.name} made by ${this.factory}`)
    } 
}

class washingMachine extends kitchenTools{
    constructor(name, status, power, color){
        super(name, status, power);
        this.color = color
        console.log(`${this.name} color is ${this.color}`)       
    } 
}

class computer extends kitchenTools{
    constructor(name, status, power, processor){
        super(name, status, power);
        this.processor = processor
        console.log(`Processor in ${this.name} is ${this.processor}`)       
    } 
}

let mixer1 = new mixer('mixer', 'on', 5, 'Aceline');
let washingMachine1 = new washingMachine('washingMachine', 'on', 50, 'Grey');
let computer1 = new computer('computer', 'off', 30, 'Ryzen 5600H');

let allTools = [mixer1, washingMachine1, computer1]

function totalPower(arr){
    let sumPower = 0;   
    arr.forEach((tool) =>{
        if (tool.status == 'on'){
            tool.power = tool.power
        }else{
            tool.power = 0
        }
        sumPower += tool.power        
    })   
    console.log(`Total power is ${sumPower} w`) 
  } 


totalPower(allTools)