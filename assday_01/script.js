

// function sum(a,b)
// {
//     return a+b;
// }
// console.log( sum(2,3));

class user {
   constructor(username)
   {
    this.username = username
   }
   logMe()
   {
    console.log(`username is : ${this.username}`);
   }
}

class teacher extends user{
    constructor(username , emailid,password)
    {   
            super(username);
        this.username = username;
        this.emailid = emailid;
        this.password = password;
    }

    aadcourse()
    {
        console.log(`this is the paid course ${this.username}`);
    }
}

const chai = new teacher("ajay","ajay@123",'123');
// console.log(chai);

chai.aadcourse()