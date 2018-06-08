var fname, lname, email, subject, message, submit;


fname = document.getElementById('fname');
lname = document.getElementById('lname');
email = document.getElementById('email');
subject = document.getElementById('subject');
message = document.getElementById('message');
submit = document.getElementById('submit');


submit.onclick = function(e){
  var nameError = document.getElementById('name-error');
  var emailError = document.getElementById('email-error');
  var subjectError = document.getElementById('subject-error');
  var messageError = document.getElementById('message-error');

  //Check if any value is false:
  var errorVal = validateText(fname)*validateText(lname)*validateText(subject)*validateText(message);

  if(errorVal === 0 || !validateEmail(email)){
    e.preventDefault();
    if(!validateText(fname) || !validateText(lname)){
      expandErrorBox(nameError);
      nameError.innerHTML = "Please enter a name"
      if(!validateText(fname)){
        fname.style.border = "0.01rem solid red";
      }
      else{
        fname.style.border = "0.01rem solid rgba(75,162,206,0.75)";
      }
      if(!validateText(lname)){
        lname.style.border = "0.01rem solid red";
      }
      else{
        lname.style.border = "0.01rem solid rgba(75,162,206,0.75)";
      }
    }
    else{
      fname.style.border = "0.01rem solid rgba(75,162,206,0.75)";
      lname.style.border = "0.01rem solid rgba(75,162,206,0.75)";
      shrinkErrorBox(nameError);
    }

    if(!validateEmail(email)){
      expandErrorBox(emailError);
      emailError.innerHTML = "Please enter a valid e-mail address"
      email.style.border = "0.01rem solid red";
    }
    else{
      email.style.border = "0.01rem solid rgba(75,162,206,0.75)";
      shrinkErrorBox(emailError);
    }

    if(!validateText(subject)){
      expandErrorBox(subjectError);
      subjectError.innerHTML = "Please enter a subject";
      subject.style.border = "0.01rem solid red";
    }
    else{
      subject.style.border = "0.01rem solid rgba(75,162,206,0.75)";
      shrinkErrorBox(subjectError);
    }

    if(!validateText(message)){
      expandErrorBox(messageError);
      messageError.innerHTML = "Please enter a message";
      message.style.border = "0.01rem solid red";
    }
    else{
      message.style.border = "0.01rem solid rgba(75,162,206,0.75)";
      shrinkErrorBox(messageError);
    }
  }
  else{
    fname.style.border = "0.01rem solid rgba(75,162,206,0.75)";
    lname.style.border = "0.01rem solid rgba(75,162,206,0.75)";
    email.style.border = "0.01rem solid rgba(75,162,206,0.75)";
    subject.style.border = "0.01rem solid rgba(75,162,206,0.75)";
    message.style.border = "0.01rem solid rgba(75,162,206,0.75)";
    nameError.style.display = "none";
    emailError.style.display = "none";
    subjectError.style.display = "none";
    messageError.style.display = "none";

  }

}


function validateText(text){
  if(!text.value){
    return false;
  }
  else{
    return true;
  }
}

function validateEmail(email){
  var emailCheck = /^[A-Za-z0-9-_.]+@[A-Za-z0-9-.]+\.[A-Za-z]{2,4}$/;
  if(!emailCheck.test(email.value)){ return false; }
  else{ return true; }
}

function expandErrorBox(boxName){
    var height, timer;
    height = 0;
    timer = setInterval(function(){
      if(height >= 1){
        clearInterval(timer);
      }
      boxName.style.display = 'block';
      boxName.style.height = height + 'rem';
      height += 0.1;
    }, 20);
}

function shrinkErrorBox(boxName){
  var height, timer;
  height = 1.1;
  timer = setInterval(function(){
    if(height <= 0){
      clearInterval(timer);
      boxName.style.display = 'none';
    }
    boxName.style.height = height + 'rem';
    height -= 0.1;
  }, 20);
}
