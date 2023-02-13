import Story from "./Story.js";

const itens = [{ name: "9gag", img: "assets/img/9gag.svg" },
{ name: "Meowed", img: "assets/img/meowed.svg" },
{ name: "Barked", img: "assets/img/barked.svg" },
{ name: "Nathanwpylestrangeplanet", img: "assets/img/nathanwpylestrangeplanet.svg" },
{ name: "Wawawicomics", img: "assets/img/wawawicomics.svg" },
{ name: "Respondeai", img: "assets/img/respondeai.svg" },
{ name: "Filomoderna", img: "assets/img/filomoderna.svg" },
{ name: "Memeriagourmet", img: "assets/img/memeriagourmet.svg" },]


export default function Stories() {
    return (
        <div className="stories">
            {itens.map((array, index) => (
                <Story propName={array.name} propImg={array.img} key={index} />
            ))}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}