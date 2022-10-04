document.querySelector(button).onclick =() =>
{
    let a = document.querySelector(".a").value
    let b = document.querySelector(".b").value
    if (a== "" || b=="")
    {
        alert("Enter number please")
    }
    else if ((+a)% 2 == 0 && (+b)% 2 == 0 ||(+a)% 2 == 1 && (+b)% 2 == 1 )
    {
        alert((`${a} + ${b}) * ${b} =` + ((a+b)*b)
    }

}