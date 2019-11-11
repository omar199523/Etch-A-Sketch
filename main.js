// create container to input .
var con =  document.body.appendChild(document.createElement("div"));
con.className = "con";
con.appendChild(document.createElement("h4")).innerHTML ="Click okay to select the number of grid boxes ";
//create button.
var b = document.createElement("button");
b.innerHTML ="okay";
var myButton = con.appendChild(b).id="myButton";
//creat container to netwark.
var myMainDiv = document.body.appendChild(document.createElement("div"));
myMainDiv.className = "myMainDiv";
// this function warks at the calculation of diminsions of the cell.
function calcolatDiv(n){
   var a = 800/n;
   return a  - (a*0.2);
 // this function warks at the calculation of margin of the cell   
};
function calcoMarg(n){
    let a = 800/n;
    return a*0.095;
};
// this function warks at create netwark in myMainDiv.
function creatNetwark(num,parant){
    window.location.reload
    //this for to create cell.
    for (i=0;i<num*num;i++){
            var cell = document.createElement("div");
            parant.appendChild(cell).className = "cell";
            cell.style.width = calcolatDiv(num) +"px";
            cell.style.height = calcolatDiv(num) +"px";
            cell.style.margin = calcoMarg(num) +"px";
    }
    //this for to mack hover.
    for(i=0;i<parant.childElementCount;i++){
        let cell = parant.getElementsByTagName("div");
        cell[i].onmouseenter = function(){
            this.style.backgroundColor = randColor();
        }
        /*cell[i].onmouseleave = function(){
            this.style.backgroundColor = "rgb(48, 53, 52)";
        }*/
   }
};

// this function warks at create rondom color;
function randColor(){
    let r= Math.floor(Math.random()*250);
    let g= Math.floor(Math.random()*250);
    let b= Math.floor(Math.random()*250) ;
        
    return "rgb("+r+","+g+","+(b*0.10)+")";
};
//this eavnts wark when cklick dowm of the button reload to window.
//and when click up Running out prompt.
b.onmousedown = function(){
    window.location.reload();
}
b.onmouseup = function(){
    let num = prompt ("pleas enter youer number to create new netwark","16");
    let num1 = parseInt(num);
    return creatNetwark(num1,myMainDiv);
};















 












 










