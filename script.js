// XMHL request
const card = document.querySelector(".card");
const anc = document.querySelector("#anc");
const requestUrl = "https://api.github.com/users/sourcebykhalid";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    console.log(this.responseText);
    const data = JSON.parse(this.response); // parse the response to a JavaScript object
    card.innerHTML = data.bio;
    anc.innerHTML = data.html_url;
    console.log(data);
    console.log(typeof data);
    console.log(data.following);
    console.log(data.bio);
  }
};
xhr.send();
