console.log("App file is Running");


function addbtn(){
const data = document.querySelector("input").value
const shown_list = document.getElementById('todo_data_list');


if(data){
    const li = document.createElement('li')
li.style.listStyle = "none"
li.style.backgroundColor = "#d9ceed"
li.style.padding = "4px 10px"
li.style.borderRadius = "6px"
li.style.fontSize = "20px"
const span = document.createElement('span');
    span.textContent = data;
    li.appendChild(span);
 shown_list.appendChild(li)

 const dlt = document.createElement('button');
 dlt.style.marginLeft = "10px"
 dlt.style.padding = "4px 8px"
 dlt.style.backgroundColor = "#e5e9ff"
 dlt.style.border = "1px solid #9b7ad6"
 dlt.style.borderRadius = "4px"
 dlt.style.color = "#7e48d4"
    dlt.innerHTML = "Delete";
    dlt.onclick = () => li.remove();
    li.appendChild(dlt);

    document.querySelector("input").value = ""; // clear input
}
else{
    showPopup("Please enter some text!");
}
}

function showPopup(message) {
  const popup = document.createElement('div');
  popup.innerHTML = message;
  popup.style.width = "200px";
  popup.style.padding = "15px";
  popup.style.backgroundColor = "#fff";
  popup.style.border = "2px solid #7e48d4";
  popup.style.borderRadius = "8px";
  popup.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.zIndex = "9999";
  popup.style.textAlign = "center";

  // Add close button
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = "OK";
  closeBtn.style.marginTop = "10px";
  closeBtn.style.padding = "5px 12px";
  closeBtn.style.border = "none";
  closeBtn.style.backgroundColor = "#7e48d4";
  closeBtn.style.color = "#fff";
  closeBtn.style.borderRadius = "4px";
  closeBtn.onclick = () => popup.remove();

  popup.appendChild(document.createElement("br"));
  popup.appendChild(closeBtn);

  document.body.appendChild(popup);
}

