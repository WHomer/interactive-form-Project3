/**
 * Created by whomer on 8/21/2016.
 */

//Problem: No user interactivity
//Solution: Add user interactivity as described below.


//1. Create a new text input on selection of OTHER for Job Role drop down

  var title = document.getElementById('title');
  //Create new text input id 'other-title'
  var otherTitleInput = document.createElement("input");
  otherTitleInput.id = "other-title";
  //Add placeholder text of 'Your Title'
  otherTitleInput.placeholder = "Your Title";
  otherTitleInput.type = "text";
  otherTitleInput.style.display = "none";
  document.getElementById("basicInfo").appendChild(otherTitleInput);


  //var titleOption = title.selectedIndex;
  function titleSelect() {
    if (title.selectedIndex === 5){
      console.log(title.selectedIndex);
      otherTitleInput.style.display = "block";
      otherTitleInput.focus();
    } else {
      otherTitleInput.style.display = "none";
      //Clears input on change.
      otherTitleInput.value = "";
    }
  }
  title.addEventListener("change", titleSelect);

//2. Display correct T-Shirt options based on Selection
  //If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
  //If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
//3. Remove selections for Register for Activities  on duplicate times
  //If checked = true remove the same time frame selection
  //When removed make options available
//4. As a user selects activities to register for, a running total is listed below the list
  // of checkboxes. For example, if the user selects "Main conference" then
  // Total: $200 should appear. If they add 1 workshop the total should
  // to Total: $300.
  var activityList = document.getElementsByClassName("activities")[0];
  var total = 0;
  function checkActivity() {
    //clears all disabled on start of checkActivity
    for (var i = 0; i < activityList.elements.length; i++){
      activityList.elements[i].disabled = false;
      total = 0;
    }
    for (var i = 0; i < activityList.elements.length; i++){
      //Store current value of checked into checked
      var checked = activityList.elements[i].checked;
      //compare to checked is equal to true.
      if(checked === true){
        switch (i) {
          case 0: // Main Conference - $200
            total = total + 200;
            break;
          case 1: //JavaScript Frameworks Workshop - Tues 9am-12pm, $100
            activityList.elements[3].disabled = true;
            total = total + 100;
            break;
          case 2: //JavaScript Libraries Workshop - Tuesday 1pm-4pm, $100
            activityList.elements[4].disabled = true;
            total = total + 100;
            break;
          case 3: //Express Workshop — Tuesday 9am-12pm, $100
            activityList.elements[1].disabled = true;
            total = total + 100;
            break;
          case 4: //Node.js Workshop — Tuesday 1pm-4pm, $100
            activityList.elements[2].disabled = true;
            total = total + 100;
            break;
          case 5: //Build tools Workshop — Wednesday 9am-12pm, $100
            total = total + 100;
            break;
          case 6: //npm Workshop — Wednesday 1pm-4pm, $100
            total = total + 100;
            break;
        }
      }
      //updates total cost on bottom of fieldset class="activities"
      document.getElementById("activities-total").innerHTML = "Total: $" + total;
    }
  }
  //Adds click handler to buttons
  for (var i = 0; i < activityList.elements.length; i++){
    activityList.elements[i].addEventListener("change", checkActivity);
  }


//5. Payment Info Change.
  //Hide all information as needed.
  function hidePayment() {
    document.getElementById("credit-card").style.display = "none";
    document.getElementById("paypal").style.display = "none";
    document.getElementById("bitcoin").style.display = "none";
  }
  //Call hidePayment on startup to clear all options
  hidePayment();

  function paymentSearch() {
    hidePayment();
    switch (payment.selectedIndex) {
      case 1:
        //5.1. The"Credit Card" payment option should be selected by default and result in the display of the #credit-card div, and hide the "Paypal" and "Bitcoin information.
        document.getElementById("credit-card").style.display = "block";
        document.getElementById("cc-num").focus();
        break;
      case 2:
        //5.2. When a user selects the "PayPal" payment option, display the Paypal information, and hide the credit card information and the "Bitcoin" information.
        document.getElementById("paypal").style.display = "block";
        break;
      case 3:
        //5.3. When a user selects the "Bitcoin" payment option, display the Bitcoin information, and hide the credit card information.
        document.getElementById("bitcoin").style.display = "block";
        break;
    }
  }
  var payment = document.getElementById("payment");
  payment.addEventListener("change", paymentSearch);
//6. Form Validation
  //6.1. Name field can't be empty
  //6.2. Email field must be valid formated expression.. Regular Expression
  //6.3. At least one activity must be checked
  //6.4. Payment option must be selected
    //If CC is selected All must be filled in.
      //Credit Card Number
        //Validate CC Number
      // Zip Code
      // CVV value (4 digits for Amex, 3 digits for else)



//MISC
  //Style the select menu's so they are the same flow.
  //Hide color label and drop down until a design is selected.