const albums = [
    {
        title: 'Led Zeppelin',
        url: './assets/album-1.jpg',
        description: "The album is said to have been recorded in a total of about 30 hours, and was later released to the world in 1969 after being produced by Jimmy Page. The album cover is taken from the Zeppelin airship, which is the origin of the band's name. The meaning of the band's name is 'a band that will crash like an airship made of lead.'",
    },
    {
        title: 'Led Zeppelin II',
        url: './assets/album-2.jpg',
        description: "The album that made Led Zeppelin what it is today. The album cover is a rework of a photo of the aviation unit that World War I ace fighter pilot Manfred von Richthofen, known as the 'Red Baron,' belonged to, with the faces of the members added."
    },
    {
        title: 'Led Zeppelin III',
        url: './assets/album-3.jpg',
        description: "This album was released at a time when Led Zeppelin II surpassed the disbanded Beatles and became the main stardom of the rock scene in the early 1970s along with the Rolling Stones. Unlike Led Zeppelin II, which is generally classified as heavy metal, most of the songs are British folk."
    },
    {
        title: 'Led Zeppelin IV',
        url: './assets/album-4.jpg',
        description: "It has sold a total of 37 million copies worldwide, making it the most successful album in Led Zeppelin's career, as well as the sixth best-selling album in pop music history and the third best-selling album in the rock genre."
    },
    {
        title: 'Houses of the Holy',
        url: './assets/album-5.jpg',
        description: "Houses of the Holy inherits the hard rock style of the previous work, while also showing a slightly ambient progressive rock orientation. In addition, this album contains several genres that the band had not tried before, such as attempting reggae, and is also famous for the sensational album cover designed by Hypnosis , which shows a naked blonde girl and boy climbing a mountain."
    },
    {
        title: 'Physical Graffiti',
        url: './assets/album-6.jpg',
        description: "This album was released at a time when Led Zeppelin was at its peak in terms of music, and it is an album that embodies all of Led Zeppelin's musical capabilities to the highest level. Also, considering the decline in quality of the albums released afterward, this album can be said to be the last masterpiece album by Led Zeppelin, who have been releasing only masterpieces since their debut."
    },
    {
        title: 'Presence',
        url: './assets/album-7.jpg',
        description: "It is an album that announces the decline of Led Zeppelin and is an unfortunate album that is treated as a masterpiece overshadowed by the reputation of its previous work, Physical Graffiti. "
    },
    {
        title: 'In Through the out Door',
        url: './assets/album-8.jpg',
        description: "This album is actually the last album of Led Zeppelin, because the 9th regular album Coda is an album of unreleased songs after the band disbanded after the death of John Bonham. There are a total of six versions of the album cover. It was a scene where a man was burning a letter in a bar, and this composition was so famous that it became a lot of homage."
    },
    {
        title: 'Coda',
        url: './assets/album-9.jpg',
        description: "This album is a collection of unreleased songs that were only performed live after the band disbanded following the death of John Bonham in 1980. Since it is an album that gathers a large number of songs that were made during the period of activity, the unity and plausibility between the songs are far behind other albums."
    },
];

let currentIndex = 0;

const arrow = document.querySelector('.album__arrow');
const albumTitle = document.querySelector('.album__title');
const albumImg = document.querySelector('.album__img');
const albumDesc = document.querySelector('.album__description');

function showAlbum(index){
    albumTitle.textContent = albums[index].title;
    albumImg.src = albums[index].url;
    albumDesc.textContent = albums[index].description;
}

arrow.addEventListener('click', () => {
    albumImg.style.opacity = 0;
});

albumImg.addEventListener('transitionend', () => {
    if (albumImg.style.opacity === '0') {
        currentIndex = (currentIndex + 1) % albums.length;
        showAlbum(currentIndex);
        albumImg.style.opacity = 1;
    }
});

showAlbum(currentIndex);