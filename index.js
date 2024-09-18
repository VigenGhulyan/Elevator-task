let el3Change = true;
let el2Change = true;
let el1Change = true;
function app() {
  const floors = document.getElementsByClassName("floors")[0];
  for (let i = 20; i >= 1; i--) {
    let div = document.createElement("div");
    div.classList.add("floor")
    div.id = i;
    let button = document.createElement("button");
    button.id = "fl" + i;
    button.addEventListener("click",(e) => elevatorFunction(e));
    button.innerText = i;
    div.appendChild(button);
    floors.appendChild(div);
  }

  const elevatorFloors = document.getElementsByClassName("elevators")[0];
  for (let i = 20; i >= 1; i--) {
    let div = document.createElement("div");
    div.classList.add("elevator")
    div.id = "el" + i;
    elevatorFloors.appendChild(div);
  }
  const elevator1 = document.createElement("div");
  let el1State = 1;
  elevator1.classList.add("elevator1");
  elevator1.classList.add("ell");
  const elevator2 = document.createElement("div");
  let el2State = 1;
  elevator2.classList.add("elevator2");
  elevator2.classList.add("ell");
  const elevator3 = document.createElement("div");
  elevator3.classList.add("elevator3");
  let el3State = 1;
  elevator3.classList.add("ell");
  const b = document.getElementById("el1");
  b.append(elevator1, elevator2, elevator3);
  function changer1() {
    console.log("mtav1");
    el1Change = !el1Change;
    console.log(el1Change);
  }
  function changer2() {
    console.log("mtav2");
    el2Change = !el2Change;
    console.log(el2Change)
  }
  function changer3() {
    el3Change = !el3Change;
    console.log("mtav3");
    console.log(el3Change)
  }

  function elevatorFunction(e) {
    const id = e.target.id;
    let a = (Number(id.replace('fl', '')));
    let g = -((a - 1) * 30) + "px";
    console.log({el2Change, el2State, el3State, el1Change});
    
    if (el1Change && (Math.abs(el1State-a) <= Math.abs(el2State-a) && Math.abs(el1State-a) <= Math.abs(el3State-a) )) {
      elevator1.style.transform = `translate(0px , ${g})`;
      el1State = a;
    }else if (el2Change && (!el1Change || (Math.abs(el2State-a) <= Math.abs(el1State-a)) && Math.abs(el2State-a) <= Math.abs(el3State-a) )) {
      elevator2.style.transform = `translate(0px , ${g})`;
      el2State = a;
    }else if(el3Change){
      elevator3.style.transform = `translate(0px , ${g})`;
      el3State = a;
    }
    else if(el1Change && (Math.abs(el1State-a) <= Math.abs(el2State-a))){
      elevator1.style.transform = `translate(0px , ${g})`;
      el1State = a;
    }
    else if(el2Change){
      elevator2.style.transform = `translate(0px , ${g})`;
      el2State = a;
    }
    else if(el1Change){
      elevator1.style.transform = `translate(0px , ${g})`;
      el1State = a;
    }
    else{
      alert("pleas wait");
    }

    elevator1.removeEventListener(`transitionstart` ,changer1);
    elevator2.removeEventListener(`transitionstart` ,changer2);
    elevator3.removeEventListener(`transitionstart` ,changer3);
    elevator1.removeEventListener(`transitionend` ,changer1);
    elevator2.removeEventListener(`transitionend` ,changer2);
    elevator3.removeEventListener(`transitionend` ,changer3);
    elevator1.addEventListener(`transitionstart`,changer1);
    elevator1.addEventListener(`transitionend`,changer1);
    elevator2.addEventListener(`transitionstart` ,changer2);
    elevator2.addEventListener(`transitionend`, changer2);
    elevator3.addEventListener(`transitionstart` ,changer3);
    elevator3.addEventListener(`transitionend`, changer3);
  };
}

app();