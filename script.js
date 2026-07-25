const password = prompt("パスワードを入力してください");

if (password !== "abc123") {
  document.body.innerHTML = "アクセスできません";
}


const title=document.getElementById("title");

setTimeout(()=>{

title.animate([

{

opacity:0,

transform:"scale(0.5)"

},

{

opacity:1,

transform:"scale(1)"

}

],{

duration:1500,

fill:"forwards"

});

},500);