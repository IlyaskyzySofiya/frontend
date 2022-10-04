document.querySelector("button").onclick = () =>
{
    let a = document.querySelector(".a").value
    let b = document.querySelector(".b").value
    let g = document.querySelector(".g").value
    let f = document.querySelector(".f").value
 

    if (a=="")
    {
        alert("Please fill in the Name form")
    }
    else if (b=="")
    {
        alert("Please fill in the Age form")
    }
    else if (g=="")
    {
        alert("Please fill in the E-mail form")
    }
    else if (f=="")
    {
        alert("Please fill in the Place of birth form")
    }
   
    if ((+b) <= +18)
    {
        alert("Сиз мектеп окуучусусуз.")
    }
    else if((+b) >= +18 && (+b)<= 55)
    {
        alert("Сиз ишке жарактуусуз.")
    }
    else if((+b) >= +55 )
    {
        alert("Сиз пенсионерсиз.")
    }
    
}



    