
let listOfCustomers = [];
var customer_id = 0;
var current_capacity = 0;
var max_capacity = 0;

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}
//Send data to firebase database
/*function writeUserData() {
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

db = firebase.firestore(app);
const res = await db.collection('requests').doc(cust_id).set(custData);
    /*firebase.database() {
        firebase.database().ref("requests").push({
            phoneNo: custNum,
            subDate: dateTime
        });
    }

  
}*/

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


function saveMaxCapacity() {
    var maxCap = document.getElementById("maxCapacityInput").value;
    document.getElementById("chosenMaxCapacity").innerHTML = maxCap;
    max_capacity = maxCap;
  
}
function increaseCapacity()
   {
        current_capacity++;
        if (current_capacity > max_capacity)
        {
          current_capacity = max_capacity;
        }
        document.getElementById("customerCountTracker").innerHTML = current_capacity;
        
   }

function decreaseCapacity()
    {
        current_capacity--;
        if (current_capacity < 0)
        {
          current_capacity = 0;
        }
        document.getElementById("customerCountTracker").innerHTML = current_capacity;
       
    }

const saveCustomerNumber = (ev)=>{
    ev.preventDefault();
    var li = document.createElement("li");
    var custNum = document.getElementById("customerNumInput").value;
    if (custNum == ""){

    }
    else{
    var t = document.createTextNode(custNum);
    li.appendChild(t);
    document.getElementById("custUL").appendChild(li);
    document.getElementById("customerNumInput").value = "";

    customer_id = Date.now();
    let customer = {
        id: customer_id,
        number: custNum
    }
    listOfCustomers.push(customer);
    document.forms[0].reset(); //clear form for next entry

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    console.warn('added', {listOfCustomers});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(listOfCustomers, '\t', 2);

    localStorage.setItem('CustomerList', JSON.stringify(listOfCustomers));
    }
}

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('submitBtn').addEventListener('click', saveCustomerNumber);
});

document.addEventListener('DOMContentLoaded', ()=> {
  document.getElementById('saveMaxCapacityBtn').addEventListener('click', saveMaxCapacity);
});
