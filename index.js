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
        if (current_capacity >= max_capacity){
            toggleOutsideQueue()
        }
   }

function decreaseCapacity()
    {
        current_capacity--;
        if (current_capacity < 0)
        {
          current_capacity = 0;
        }
        document.getElementById("customerCountTracker").innerHTML = current_capacity;
        if (current_capacity < max_capacity){
            toggleOutsideQueue()
        }
    }

function toggleOutsideQueue() {
  var x = document.getElementById("outsideQueueDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
const saveCustomerNumber = (ev)=>{
    ev.preventDefault();
    var li = document.createElement("li");
    var custNum = document.getElementById("customerNumInput").value;
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

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('submitBtn').addEventListener('click', saveCustomerNumber);
});

document.addEventListener('DOMContentLoaded', ()=> {
  document.getElementById('saveMaxCapacityBtn').addEventListener('click', saveMaxCapacity);
});
