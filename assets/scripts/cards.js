const cardData = [{
    title: "Energy,\n" +
        "Enthusiasm,\n" +
        "Excitement",
    desc: "At Gang Show, whether you find yourself on stage, off stage or in the audience our energy enthusiasm and excitement is contagious; a good time is to be had by all",
    background: "",
    url: "",
}, {
    title: "WORKSHOPS",
    desc: "Our team would love to visit your Guide or Scout group for a night of energy, enthusiasm, and excitement. \n" +
        "\n" +
        "If you are in the Illawarra Region, please contact us and let us show your Unit what they are capable of.",
    background: "",
    url: "",
}, {
    title: "Become A Sponsor",
    desc: "",
    background: "",
    url: "",
}]

loadHTML()
function loadHTML() {
    const cardContainer = document.querySelector('.cards-container')
    let cardsHTML;
    cardData.forEach((card) => {
        cardsHTML += `
            <div class="card" style="background-image: url(${card.background});">
                <h2>${card.title}</h2>
                <div>
                    <p>${card.desc}</p>
                    <a class="button" href="${card.url}">
                </div>
            </div>
        `
    });
    cardContainer.innerHTML = cardsHTML;
}