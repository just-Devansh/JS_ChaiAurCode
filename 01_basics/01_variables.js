const accountId = 144553
let accountEmail = "dev@google.com"
var acountPassword = "12345"
accountCity = "Jaipur"  //this practice should be avoided
let accountState;

// accountId = 2 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

/*
Prefer not to use 'var' 
beause of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])