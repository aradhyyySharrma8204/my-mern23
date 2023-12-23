function printTimer()
        {
            var cdt=new Date();
            console.log("heyy");
            console.log(cdt.getHours()+":"+cdt.getMinutes()+":"+cdt.getSeconds());

        }
        printTimer();
const startTimer=()=>
{
    setInterval(printTimer,1000);
}
startTimer();