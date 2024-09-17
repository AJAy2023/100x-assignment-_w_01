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



