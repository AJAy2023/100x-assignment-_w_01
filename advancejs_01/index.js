

const user = {
    username:'ajay',
    age:21,
    address: 'chandikapur',
    phone : 9380565153,

    getdetailes: function()
    {
        console.log(`username:${this.username}`);
    }
}

// console.log(user.username);
console.log(user.getdetailes())



function user1(loginid, logincount, logintime)
{
            this.loginid = loginid;
            this.logincount = logincount;
            this.logintime = logintime;

            return this 
}

const userone  = new  user1(101,1,10.00);
const usertwo = new user1(102,2,11.00);

// console.log(userone);
// console.log(usertwo);


async function getData() {
    const url = "https://example.org/products.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  

