function somma(){
    let numInput=document.getElementById("demo").value
    let numInput2=document.getElementById("demo2").value
    let num1= parseFloat(numInput)
    let num2= parseFloat(numInput2)
    print=num1+num2
}
function sottrazione(){
    let numInput=document.getElementById("demo").value
    let numInput2=document.getElementById("demo2").value
    let num1= parseFloat(numInput)
    let num2= parseFloat(numInput2)
    print=num1-num2
}
function moltiplicazione(){
    let numInput=document.getElementById("demo").value
    let numInput2=document.getElementById("demo2").value
    let num1= parseFloat(numInput)
    let num2= parseFloat(numInput2)
    print=num1*num2
}
function divisione(){
    let numInput=document.getElementById("demo").value
    let numInput2=document.getElementById("demo2").value
    let num1= parseFloat(numInput)
    let num2= parseFloat(numInput2)
    print=num1/num2
}
function uguale(){
    document.getElementById("dest").innerHTML=print
}
