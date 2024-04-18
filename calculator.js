// let button = document.query('button')
// let display = document.getElementById('input')
// let calcbuttons = document.
// let string = "";
// console.log(button);
// [...button].forEach(element => {
//     element.addEventListener('click',(e)=>{
//         display.value+=element.innerText
//         if(element.innerHTML == "=") {
//             String = eval(string);
//             document.getElementById.value = string;
            
             
//         }
//         else{
//             console.log(e.target);
//          string = string + element.innerHTML;
//         document.querySelector('input').value = string;
            
//         }
        
//     })
// });


// let string = "";
// if(element.innerHTML == "=") {
//     String = eval(string);
     
// }
// else{
//     console.log(e.target);
//     string = string + e.target.innerHTML;
// }

  

let string = "";
let buttons = document.querySelectorAll('button')  
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        // console.log(e,"==event");

        if(e.target.innerHTML == '=' && string.length===0){
            alert(" You must write something!!!")
            return;
        }
    
        if(e.target.innerHTML == '='){ 
            string = eval(string);
        }
        else if(e.target.innerHTML == 'RESET'){
            string = "";
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.toString()
            
            string = string.substring(0,string.length-1);
            console.log(string);
            console.log(typeof string);
            
   
        }
        else{
        console.log(e.target);
        string += e.target.innerHTML;
        }
        document.querySelector('input').value = string;

        
    })
})



