const title = document.getElementById("title");

const messages = [
    "HappyBirthday！🎉",
    "本日の誕生日会<br>楽しんでいただけました？？？",
    "いただけましたよね😳",
    "実は....",
    "もう一つプレゼントがあります！！！",
    "何か当ててみてください<br>（当たった場合、あげます）"
];

let index = 0;
let animating = false;

function showMessage() {

    title.innerHTML = messages[index];

    title.animate([
        {
            opacity: 0,
            transform: "translateY(80px)"
        },
        {
            opacity: 1,
            transform: "translateY(0)"
        }
    ], {
        duration: 700,
        fill: "forwards",
        easing: "ease-out"
    });

    if (index === messages.length - 1) {
        hint.style.display = "none";
    }

    animating = false;
}

showMessage();

document.addEventListener("click", () => {

    if (animating || index >= messages.length - 1) return;

    animating = true;

    title.animate([
        {
            opacity: 1,
            transform: "translateY(0)"
        },
        {
            opacity: 0,
            transform: "translateY(-80px)"
        }
    ], {
        duration: 500,
        fill: "forwards",
        easing: "ease-in"
    });

    setTimeout(() => {
        index++;
        showMessage();
    }, 500);

});


// let index = 0;

// function showMessage() {
//     title.style.opacity = 0;
//     title.innerHTML = messages[index];

//     title.animate(
//         [
//             { opacity: 0, transform: "scale(0.5)" },
//             { opacity: 1, transform: "scale(1)" }
//         ],
//         {
//             duration: 1000,
//             fill: "forwards"
//         }
//     );

//         // 最後のメッセージなら案内を消す
//     if (index === messages.length - 1) {
//         hint.style.display = "none";
//     }

//   }

// showMessage();

// document.addEventListener("click", () => {
//     if (index < messages.length - 1) {
//         index++;
//         showMessage();
//     }
// });