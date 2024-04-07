let count=0;


function increase(){
    count+=1;
    document.getElementById("count").innerText=count;
    console.log(count);
}
function decrease(){
    count-=1;
    document.getElementById("count").innerText=count;
    console.log(count);
}
