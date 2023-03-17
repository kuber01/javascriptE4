let obj = {
    size: 12,
    weight: 8,
};

function printOwnProps(object){
    for ( let prop in object){
        if (object.hasOwnProperty(prop)) {
            console.log(prop + " : " + obj[prop]); 
        }   
    }
 }

printOwnProps(obj)