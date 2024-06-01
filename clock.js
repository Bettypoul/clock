//function definition
function gettime(){
    //object
    const time=new Date()
    console.log(time);
               //objectname.methodname()
    const hour=time.getHours()
    console.log(hour);

    const min=time.getMinutes()
    console.log(min);

    const sec=time.getSeconds()
    console.log(sec);

    result.innerHTML=`${hour}:${min}:${sec} ${hour>=12?'PM':'AM'}`

    setTimeout(()=>{
        gettime()
    },1000)
}

//function call

gettime()