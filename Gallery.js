class Gallery {
    static VISIBLE_CLASS = 'visible';

    currentPhoto = -1;

    constructor(containerEl, photos) {
        this.containerEl = containerEl;

        this.generateHtml(photos);
        this.showNextPhoto();

        setInterval(this.showNextPhoto, 2000);
    }

    onRootElementClick = (e) => {
        this.showNextPhoto();
    };

    generateHtml(photos) {
        const lis = photos.map(
            (photo, index) =>
                `<li class="gallery-photo"><img src="${photo}?${index}" /></li>`
        );

        this.rootElement = document.createElement('ul');
        this.rootElement.insertAdjacentHTML('beforeEnd', `${lis.join('')}`);

        this.containerEl.append(this.rootElement);

        this.rootElement.addEventListener('click', this.onRootElementClick);
    }

    showNextPhoto = () => {
        if (this.rootElement.children[this.currentPhoto]) {
            this.rootElement.children[this.currentPhoto].classList.remove(
                Gallery.VISIBLE_CLASS
            );
        }

        this.currentPhoto++;

        if (this.currentPhoto === this.rootElement.children.length) {
            this.currentPhoto = 0;
        }

        this.rootElement.children[this.currentPhoto].classList.add(
            Gallery.VISIBLE_CLASS
        );
    };
}

// function Gallery(containerEl, photos) {
//     this.containerEl = containerEl;

//     this.currentPhoto = -1;

//     this.generateHtml(photos);
//     this.showNextPhoto();
//     setInterval(this.showNextPhoto.bind(this), 2000);
// }

// Gallery.VISIBLE_CLASS = 'visible';

// Gallery.prototype.generateHtml = function (photos) {
//     const lis = photos.map(
//         (photo, index) =>
//             `<li class="gallery-photo"><img src="${photo}?${index}" /></li>`
//     );

//     this.rootElement = document.createElement('ul');
//     this.rootElement.insertAdjacentHTML('beforeEnd', `${lis.join('')}`);

//     this.containerEl.append(this.rootElement);

//     this.rootElement.addEventListener(
//         'click',
//         this.onRootElementClick.bind(this)
//     );
// };

// Gallery.prototype.onRootElementClick = function (e) {
//     console.log('clicked on ul');

//     this.showNextPhoto();
// };

// Gallery.prototype.showNextPhoto = function () {
//     if (this.rootElement.children[this.currentPhoto]) {
//         this.rootElement.children[this.currentPhoto].classList.remove(
//             Gallery.VISIBLE_CLASS
//         );
//     }

//     this.currentPhoto++;

//     if (this.currentPhoto === this.rootElement.children.length) {
//         this.currentPhoto = 0;
//     }

//     this.rootElement.children[this.currentPhoto].classList.add(
//         Gallery.VISIBLE_CLASS
//     );
// };
