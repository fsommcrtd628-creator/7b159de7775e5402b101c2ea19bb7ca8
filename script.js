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

function showMessage() {
    title.style.opacity = 0;
    title.innerHTML = messages[index];

    title.animate(
        [
            { opacity: 0, transform: "scale(0.5)" },
            { opacity: 1, transform: "scale(1)" }
        ],
        {
            duration: 1000,
            fill: "forwards"
        }
    );
}

showMessage();

document.addEventListener("click", () => {
    if (index < messages.length - 1) {
        index++;
        showMessage();
    }
});