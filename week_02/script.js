// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function count()
{
    let count = 0;
    let set = setInterval(function()
{
    count++;
    console.log(count);
    if(count == 10)
    {
        clearInterval(set);
    }
},1000);
}
count();

/*
## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/

/*
step1 - i need to take Date() and then i have to move the date every second for that  i have to use setinterval then . in that setInterval method i have to move that varible
*/
function count1() {
    setInterval(function() {
        let date = new Date();
        let hours24 = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        
        // Format the time in HH:MM:SS format (24-hour)
        let time24 = `${padZero(hours24)}:${padZero(minutes)}:${padZero(seconds)}`;
        
        // Convert to 12-hour format
        let hours12 = hours24 % 12 || 12;  // Convert 0 to 12 for midnight
        let ampm = hours24 >= 12 ? 'PM' : 'AM';
        let time12 = `${padZero(hours12)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;

        console.log("24-hour format: " + time24);
        console.log("12-hour format: " + time12);

    }, 1000);
}

function padZero(num) {
    return num < 10 ? '0' + num : num;
}

// Start the clock
count1();

