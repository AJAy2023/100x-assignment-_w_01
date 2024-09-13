


let isargam = function(str1, str2)
{
    let sorted1 = str1.split('').sort().join();
    let  sorted2 = str2.split('').sort().join();

    return (sorted1 === sorted2);
}




console.log(isargam('hello','olleh'));
console.log(isargam('hello','olled'));

