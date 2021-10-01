
module.exports.getDate = getDate;  //this will export the fuction
// we are adding .getDate because if we have multiple functions such as getDay or getTime we can bind the export object to them as
// module.exports.getDay = getDay  or module.exports.getTime = getTime
// and we can simply access in other file(app.js in our case) by using date.getDay or date.getTime (in app.js we have date variable 
// to aquire this module)

function getDate(){
    let today = new Date();
   
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
   
    let day = today.toLocaleString('en-us',options);

    return day;
}

exports.getDay = function(){  //we can use exports.getDay also 
    let today = new Date();
   
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
   
    return today.toLocaleString('en-us',options);

};