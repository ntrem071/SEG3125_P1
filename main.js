
const hamMenu = document.querySelector(".ham-menu");
const hiddenMenu = document.querySelector(".hidden-menu");
let currp = 1;

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  hiddenMenu.classList.toggle("active");
});


function updateLabel(text,label) {
  document.getElementById(label).innerText = text;
}

function navShop(btn,prev,next) {
  if (prev){
    document.querySelector("#page"+currp).classList.add("d-none");
    document.querySelector("#btn"+currp+" a").classList.remove("active");
    document.querySelector("#page"+(currp-1)).classList.remove("d-none");
    document.querySelector("#btn"+(currp-1)+" a").classList.add("active");
    currp-=1;

  }
  else if (next){
    document.querySelector("#page"+currp).classList.add("d-none");
    document.querySelector("#btn"+currp+" a").classList.remove("active");
    document.querySelector("#page"+(currp+1)).classList.remove("d-none");
    document.querySelector("#btn"+(currp+1)+" a").classList.add("active");
    currp+=1;
  }
  else{
    document.querySelector("#page"+currp).classList.add("d-none");
    document.querySelector("#btn"+currp+" a").classList.remove("active");
    currp=btn;
    document.querySelector("#page"+btn).classList.remove("d-none");
    document.querySelector("#btn"+btn+" a").classList.add("active");
  }    
  
  if(currp==1){
    document.querySelector("#prev").classList.add("disabled");
    document.querySelector("#next").classList.remove("disabled");
  }else if(currp==3){
    document.querySelector("#next").classList.add("disabled");
    document.querySelector("#prev").classList.remove("disabled");
  }
  else{
    document.querySelector("#prev").classList.remove("disabled");
    document.querySelector("#next").classList.remove("disabled");
  }
  console.log(currp);
}

let items = document.querySelectorAll('.carousel .c3-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
}) 


let spiercing = '';
const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))

function setDropVal(val){
  document.querySelector('#dropdownMenuButton').innerHTML = val;
  spiercing = val;
}

let sexpert="Anya Jones";
function selExper(selectedId) {
 
  let buttons = document.querySelectorAll('.btn-expert');

  buttons.forEach(button => {
      button.classList.remove('active');
  });

  let button = document.getElementById(selectedId);
  button.classList.add('active');
  sexpert = button.innerHTML;
}

let stime="9:00-9:30";

function selTime(selectedId) {
 
  let buttons = document.querySelectorAll('.btn-time');

  buttons.forEach(button => {
      button.classList.remove('active');
  });

  let button = document.getElementById(selectedId);
  button.classList.add('active');
  stime = button.innerHTML;
}

function verify(){
    let flag = true;
    let b1 = document.getElementById("fname");
    let b2 = document.getElementById("lname");
    let b3 = document.getElementById("email");
    let b4 = document.getElementById("cemail");
    let b5 = document.getElementById("dt");
    let b6 = document.getElementById("chk");
    let b7 = document.getElementById("chk-lbl");

    if(b1.value.trim() === ''){b1.classList.add('unfilled'); flag=false;}
    else{b1.classList.remove('unfilled');}
    if(b2.value.trim() === ''){b2.classList.add('unfilled'); flag=false;}
    else{b2.classList.remove('unfilled');}
    if(b3.value.trim() === ''){b3.classList.add('unfilled'); flag=false;}
    else{b3.classList.remove('unfilled');}
    if(b4.value.trim() === ''){b4.classList.add('unfilled'); flag=false;}
    else{b4.classList.remove('unfilled');}
    if(b5.value.trim() === ''){b5.classList.add('unfilled'); flag=false;}
    else{b5.classList.remove('unfilled');}
    if(!b6.checked){b7.classList.add('chk-unfilled'); flag=false;}
    else{b7.classList.remove('chk-unfilled');}


    if(!flag){
      document.getElementById('modal-b').scrollTo({ top: 0, behavior: 'smooth' });
      document.getElementById('minfo').innerText = "**Missing information, please complete all forms**";
    }else{
      let d = document.getElementById('dt').value;
      document.getElementById('minfo').innerText = "";
      var modal = document.getElementById('staticBackdrop');
      var modalInstance = bootstrap.Modal.getInstance(modal);
      modalInstance.hide();
    
      var modal = document.getElementById('modal2');
      var modalInstance = new bootstrap.Modal(modal);
      document.getElementById("cdate").innerHTML = d;
      document.getElementById("ctime").innerHTML = stime;
      document.getElementById("cpiercing").innerText = spiercing;
      document.getElementById("cexpert").innerHTML = sexpert;
      modalInstance.show();
    }

}

function seeProfile(expert){
      let buttons = document.querySelectorAll('.pimg');

      buttons.forEach(button => {
          button.classList.remove('active');
      });

      document.getElementById("p-"+expert).classList.add('active');

      var modal = document.getElementById('modal3');
      var modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();

      document.getElementById('md3').innerHTML=expert+"'s Portfolio";
}



document.addEventListener('DOMContentLoaded', function() {
  const experts = ['Anya', 'Victor', 'Naomi'];
  experts.forEach(expert => {
      const form = document.getElementById(`review-form-${expert}`);
      form.addEventListener('submit', function(e) {
          handleSubmitReview(e, expert);
      });
  });
});

function handleSubmitReview(e, expert) {
  e.preventDefault();

  const rating = document.querySelector(`input[name="rating-${expert}"]:checked`);
  if (!rating) {
      alert('Please select a rating');
      return;
  }

  const reviewText = document.getElementById(`review-text-${expert}`).value;

  if (reviewText.trim() === '') {
      alert('Please write a review');
      return;
  }

  const reviewItem = document.createElement('div');
  reviewItem.classList.add('review-item');

  const userDetails = document.createElement('div');
  userDetails.classList.add('user-details');

  const userIcon = document.createElement('div');
  userIcon.classList.add('user-icon');

  const userNameLabel = document.createElement('label');
  userNameLabel.classList.add('user-name');
  userNameLabel.textContent = 'Anonymous Panda';

  userDetails.appendChild(userIcon);
  userDetails.appendChild(userNameLabel);

  const reviewContent = document.createElement('div');
  reviewContent.classList.add('review-content');

  const ratingDisplay = document.createElement('h3');
  ratingDisplay.innerHTML = `${rating.value} ${'★'.repeat(rating.value)}`;

  const reviewContentText = document.createElement('p');
  reviewContentText.textContent = reviewText;

  reviewContent.appendChild(userDetails);
  reviewContent.appendChild(ratingDisplay);
  reviewContent.appendChild(reviewContentText);

  reviewItem.appendChild(reviewContent);

  document.getElementById(`reviews-list-${expert}`).appendChild(reviewItem);

  document.getElementById(`review-form-${expert}`).reset();
}