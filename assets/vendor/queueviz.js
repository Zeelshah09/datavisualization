// Get the modal

var modal = document.getElementById("popup");

// Get the button that opens the modal
var btn = document.getElementById("launch");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  popup.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  popup.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

// buttons functionality
// start() function to start predefined simulation
function start() {
    // hiding the start button
    var start = document.getElementById("start");
    start.className = start.className.replace(/\bshow\b/g, "hide");
    // making prev and next buttons visible
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    prev.className = prev.className.replace(/\bhide\b/g, "show");
    next.className = next.className.replace(/\bhide\b/g, "show");
    // hiding user input tab (if displayed at that moment)
    var moveable = document.getElementById("moveable");
    moveable.className = moveable.className.replace(/\bshow\b/g, "hide");
  }
  
  // reset() function to reset the simulator
  function reset() {
    window.location.reload();
    return false;
  }
  
  // input() function to show input tab and take user input
  function input() {
    // displaying confirm box
    var choice = confirm("Have you read the Instructions properly?");
    if (choice == true) {
      //displaying the input tab
      var moveable = document.getElementById("moveable");
      moveable.className = moveable.className.replace(/\bhide\b/g, "show");
  
      //clearing all fields
      $("#start-val").empty();
      $("#mid").empty();
      $("#last").empty();
  
      //targeting the draggable input box
      document.getElementById("moveable").scrollIntoView(true);
  
      //closing the instructions tab
      popup.style.display = "none";
    } else {
      reset();
    }
  }


  var enqueue_algo = `PROCEDURE ENQUEUE(DATA) <br><br>      
   
  Algorithm to Enqueue an item into queue. <br>

  IF QUEUE IS FULL<br>
     RETURN OVERFLOW<br>
  ENDIF<br>
  
  REAR ← REAR + 1 <br>
  QUEUE[REAR] ← DATA <br>
  RETURN TRUE <br><br>
  
END PROCEDURE <br> `;


var dequeue_algo = `PROCEDURE DEQUEUE <br><br>

Algorithm to Dequeue an item into queue. <br>

IF QUEUE IS EMPTY <br>
   RETURN UNDERFLOW <br>
END IF <br>

DATA = QUEUE[FRONT] <br>
FRONT ← FRONT + 1 <br>
RETURN TRUE <br><br>

END PROCEDURE

`;  
  i = 0;
  function myFunction() {
    document.getElementById('current_algo').innerHTML= enqueue_algo;
    n = 8;
    if (i == n) {
      alert("Queue is full");
    //   error.innerHTML = errorCircle + " Queue is Full ";
    //   error.firstChild.style.animation = "highlightNode .8s ease";
    }
    else {
    //   document.getElementById('n').disabled = true;
      q = document.getElementById('q').value
      if (q == "") {
        error.innerHTML = errorCircle + " Enter proper value ";
        error.firstChild.style.animation = "highlightNode .8s ease";
      }
      else {
        var row = document.getElementById("myRow");
        var x = row.insertCell(-1);
        var head = document.getElementById("heading");
        var h = head.insertCell(-1);
        var colCount = document.getElementById("heading").cells.length;
        x.innerHTML = q;
        if (colCount == 1) {
          a = document.getElementById('heading').cells[0];
          a.innerHTML = "&#8593 <br> Front, Rear";
        }
        else {
          a = document.getElementById('heading').cells[0];
          a.innerHTML = "&#8593 <br> Front";
          for (let i = 1; i < colCount; i++) {
            y = document.getElementById('heading').cells[i];
            y.innerHTML = "";
          }
          b = document.getElementById('heading').cells[colCount - 1];
          b.innerHTML = "&#8593 <br> Rear";
        }
        i++;
        document.getElementById('q').value = "";
      }

    }
  }

  function myFunction2() {
    document.getElementById('current_algo').innerHTML= dequeue_algo;
    if (i == 0) {
      //alert("Queue is empty");
      error.innerHTML = errorCircle + " Queue is Empty ";
      error.firstChild.style.animation = "highlightNode .8s ease";
    }
    else {
      i--;
      var row = document.getElementById("myRow");
      var del = row.cells[0].innerHTML
      row.deleteCell(0);
      var head = document.getElementById("heading");
      head.deleteCell(0);
      //alert("Deleted " + del);
      error.innerHTML = errorCircle + " Dequeued element from the queue is " + del;
      error.firstChild.style.animation = "highlightNode .8s ease";
      var colCount = document.getElementById("heading").cells.length;
      if (colCount == 1) {
        a = document.getElementById('heading').cells[0];
        a.innerHTML = "&#8593 <br> Front, Rear";
      }
      else {
        a = document.getElementById('heading').cells[0];
        a.innerHTML = "&#8593 <br> Front";
        for (let i = 1; i < colCount; i++) {
          y = document.getElementById('heading').cells[i];
          y.innerHTML = "";
        }
        b = document.getElementById('heading').cells[colCount - 1];
        b.innerHTML = "&#8593 <br> Rear";
      }

    }
  }

  // code to make the div draggable
function makeDragable(dragHandle, dragTarget) {
  let dragObj = null; //object to be moved
  let xOffset = 0; //used to prevent dragged object jumping to mouse location
  let yOffset = 0;

  document
    .querySelector(dragHandle)
    .addEventListener("mousedown", startDrag, true);
  document
    .querySelector(dragHandle)
    .addEventListener("touchstart", startDrag, true);

  /*sets offset parameters and starts listening for mouse-move*/
  function startDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    dragObj = document.querySelector(dragTarget);
    dragObj.style.position = "absolute";
    let rect = dragObj.getBoundingClientRect();

    if (e.type == "mousedown") {
      xOffset = e.clientX - rect.left; //clientX and getBoundingClientRect() both use viewable area adjusted when scrolling aka 'viewport'
      yOffset = e.clientY - rect.top;
      window.addEventListener("mousemove", dragObject, true);
    } else if (e.type == "touchstart") {
      xOffset = e.targetTouches[0].clientX - rect.left;
      yOffset = e.targetTouches[0].clientY - rect.top;
      window.addEventListener("touchmove", dragObject, true);
    }
  }

  /*Drag object*/
  function dragObject(e) {
    e.preventDefault();
    e.stopPropagation();

    if (dragObj == null) {
      return; // if there is no object being dragged then do nothing
    } else if (e.type == "mousemove") {
      dragObj.style.left = e.clientX - xOffset + "px"; // adjust location of dragged object so doesn't jump to mouse position
      dragObj.style.top = e.clientY - yOffset + "px";
    } else if (e.type == "touchmove") {
      dragObj.style.left = e.targetTouches[0].clientX - xOffset + "px"; // adjust location of dragged object so doesn't jump to mouse position
      dragObj.style.top = e.targetTouches[0].clientY - yOffset + "px";
    }
  }

  /*End dragging*/
  document.onmouseup = function (e) {
    if (dragObj) {
      dragObj = null;
      window.removeEventListener("mousemove", dragObject, true);
      window.removeEventListener("touchmove", dragObject, true);
    }
  };
}

makeDragable("#handle", "#moveable");
