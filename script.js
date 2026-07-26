const title = document.getElementById("title");

const messages = [
    "HappyBirthday！🎉",
    "本日の誕生日<br>会楽しんでいただけました？？？",
    "いただけましたよね😳",
    "実は....",
    "もう一つプレゼントがあります！！！",
    "何か当ててみてください<br>（当たった場合、あげます）"
];


let index = 0;


function showMessage(){

    title.innerHTML = messages[index];

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

}


// 初回表示
showMessage();


// タップで次へ
document.body.addEventListener("click here",()=>{

    index++;

    if(index < messages.length){

        showMessage();

    }

});