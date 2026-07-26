const title = document.getElementById("title");

const messages = [
    "HappyBirthday！🎉",
    "本日の誕生日会楽しんでいただけました？？？",
    "いただけましたよね😳",
    "実は....",
    "もう一つプレゼントがあります！！！",
    "何か当ててみてください（当たった場合、あげます）"
];


let index = 0;


function showMessage(){

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


    title.textContent = messages[index];


    index++;

    if(index < messages.length){

        setTimeout(()=>{

            title.animate([
                {
                    opacity:1
                },
                {
                    opacity:0
                }
            ],{
                duration:1000,
                fill:"forwards"
            });


            setTimeout(showMessage,1000);

        },2500);

    }

}


setTimeout(showMessage,500);