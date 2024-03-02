const ignore = document.getElementById("main");

const toMove = [];
let newObject = true;
function handleClick(event){
  if(event.target === ignore){
    return -1;
  }
  if(newObject){
    toMove.push(event.target);
    console.log(toMove)
    document.addEventListener("mousemove", handleMouseMove);
    newObject = !newObject;
  } else { 
    document.removeEventListener("mousemove", handleMouseMove);
    toMove.pop();
    newObject = !newObject;
  }
}



function handleMouseMove(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  toMove[0].style.left = `${mouseX - 50}px`;
  toMove[0].style.top = `${mouseY - 50}px`;
  console.log("Mouse position - X:", mouseX, "Y:", mouseY);

}

document.addEventListener("click", handleClick);