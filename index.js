var db = firebase.firestore();

function writeUserData() {
    var custNum = document.getElementById("customerNumInput").value; //Get phone number
    var today = new Date();
    var day = today.getDate() + "";
    var month = (today.getMonth() + 1) + "";
    var year = today.getFullYear() + "";
    var hour = today.getHours() + "";
    var minutes = today.getMinutes() + "";
    var seconds = today.getSeconds() + "";
  
    day = checkZero(day);
    month = checkZero(month);
    year = checkZero(year);
    hour = checkZero(hour);
    mintues = checkZero(minutes);
    seconds = checkZero(seconds);
  
    var dateTime = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds
   
    console.log(custNum)
    console.log(dateTime)
  
  const custData = {
    phoneNo: custNum,
    subDate: dateTime
  };
  cust_id = Date.now();
  

db.collection('requests').doc("testDoc").set(custData)
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ",error);
    })
      /*firebase.database() {
          firebase.database().ref("requests").push({
              phoneNo: custNum,
              subDate: dateTime
          });
      }*/
  
    
  }