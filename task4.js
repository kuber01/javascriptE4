function createTool(name, power, onOff){
    this.name = name,
    this.power = power,
    this.onOff = onOff
}


let mixer = new createTool(`mixer`, 5, `on`, )
let washingMachine = new createTool(`washingMachine`, 50, `on`)
let computer = new createTool('computer', 30, 'off')

let allTools = [mixer, washingMachine, computer]

function totalPower(arr){
    let sumPower = 0;   
    arr.forEach((tool) =>{
        if (tool.onOff == 'on'){
            tool.power = tool.power
        }else{
            tool.power = 0
        }
        sumPower += tool.power        
    })   
    console.log(`Total power is ${sumPower} w`) 
  } 


totalPower(allTools)