var PhotoGalleryModalScope;
(function (PhotoGalleryModalScope) {
    var PhotoGalleryModal = /** @class */ (function () {
        function PhotoGalleryModal(id, pathName, fileNameList, hideBtntime, element) {
            if (hideBtntime === void 0) { hideBtntime = 1500; }
            if (element === void 0) { element = 'body'; }
            this.id = id;
            this.pathName = pathName;
            this.fileNameList = fileNameList;
            this.$imgs = document.querySelectorAll("#".concat(this.id, " img"));
            this.$annexDestination = document.querySelector(element);
            this.$div = document.createElement('div');
            this.$btnLt = document.createElement('span');
            this.$btnRt = document.createElement('span');
            this.$btnX = document.createElement('span');
            this.hideBtntime = hideBtntime;
            this.createPhotoGallery();
        }
        PhotoGalleryModal.prototype.createPhotoGallery = function () {
            var _this = this;
            // init
            this.imgId = 0;
            this.imgTotal = this.$imgs.length;
            this.$imgs.forEach(function (el, i) {
                el.addEventListener('click', function () { return _this.showPhotoGallery(_this.imgId = i); });
            });
            // add event
            this.$div.addEventListener('mousemove', function () { return _this.toggleBtnArrows(); });
            this.$btnLt.addEventListener('click', function () { return _this.previous(); });
            this.$btnRt.addEventListener('click', function () { return _this.next(); });
            this.$btnX.addEventListener('click', function () { return _this.hidePhotoGallery(); });
            // set style class
            this.$div.className = 'photo-gallery-modal';
            this.$btnLt.className = 'photo-gallery-modal__btn-lt--hide';
            this.$btnRt.className = 'photo-gallery-modal__btn-rt--hide';
            this.$btnX.className = 'photo-gallery-modal__btn-x--hide';
            // set style class & append child
            this.$imgs.forEach(function (el, i) {
                var $clone = el.cloneNode(true);
                $clone.src = "".concat(_this.pathName).concat(_this.fileNameList[i]);
                $clone.className = 'photo-gallery-modal__img--hide';
                _this.$div.appendChild($clone);
            });
            // append child
            this.$div.appendChild(this.$btnLt);
            this.$div.appendChild(this.$btnRt);
            this.$div.appendChild(this.$btnX);
            this.$annexDestination.appendChild(this.$div);
        };
        PhotoGalleryModal.prototype.toggleBtnArrows = function () {
            var _this = this;
            clearTimeout(this.hideBtntimeRef);
            this.$btnLt.className = 'photo-gallery-modal__btn-lt--show';
            this.$btnRt.className = 'photo-gallery-modal__btn-rt--show';
            this.$btnX.className = 'photo-gallery-modal__btn-x--show';
            if (this.imgTotal == 1) {
                this.$btnLt.className = 'photo-gallery-modal__btn-lt--hide';
                this.$btnRt.className = 'photo-gallery-modal__btn-rt--hide';
            }
            if (this.imgId == 0)
                this.$btnLt.className = 'photo-gallery-modal__btn-lt--hide';
            if (this.imgId == this.imgTotal - 1)
                this.$btnRt.className = 'photo-gallery-modal__btn-rt--hide';
            this.hideBtntimeRef = setTimeout(function () {
                _this.$btnLt.className = 'photo-gallery-modal__btn-lt--hide';
                _this.$btnRt.className = 'photo-gallery-modal__btn-rt--hide';
                _this.$btnX.className = 'photo-gallery-modal__btn-x--hide';
            }, this.hideBtntime);
        };
        PhotoGalleryModal.prototype.showPhotoGallery = function (i) {
            this.toggleBtnArrows();
            this.$div.className = 'photo-gallery-modal--show';
            this.$div.childNodes[i].className = 'photo-gallery-modal__img--show';
        };
        PhotoGalleryModal.prototype.hidePhotoGallery = function () {
            this.$div.className = 'photo-gallery-modal';
            this.$div.childNodes[this.imgId].className = 'photo-gallery-modal__img--hide';
        };
        PhotoGalleryModal.prototype.next = function () {
            if (this.imgId < this.imgTotal - 1) {
                this.$div.childNodes[this.imgId++].className = 'photo-gallery-modal__img--hide';
                this.$div.childNodes[this.imgId].className = 'photo-gallery-modal__img--show';
            }
            this.toggleBtnArrows();
        };
        PhotoGalleryModal.prototype.previous = function () {
            if (this.imgId > 0) {
                this.$div.childNodes[this.imgId--].className = 'photo-gallery-modal__img--hide';
                this.$div.childNodes[this.imgId].className = 'photo-gallery-modal__img--show';
            }
            this.toggleBtnArrows();
        };
        return PhotoGalleryModal;
    }());
    PhotoGalleryModalScope.PhotoGalleryModal = PhotoGalleryModal;
})(PhotoGalleryModalScope || (PhotoGalleryModalScope = {}));
var $burgerPilot = document.getElementById("header__burger-pilot");
document.querySelectorAll("#header nav a").forEach(function (a) { return a.addEventListener("click", function () { return $burgerPilot.checked = false; }); });
new PhotoGalleryModalScope.PhotoGalleryModal('projects__gallery', './assets/img/gallery/', [
    'terrah-holly-pmhdkgRCbtE-unsplash.jpg',
    'dillon-kydd-XGvwt544g8k-unsplash.jpg',
    'alejandra-cifre-gonzalez-ylyn5r4vxcA-unsplash.jpg',
    'josh-hild-6kVGxIHriTA-unsplash.jpg',
    'oliur-POycdKPE8KQ-unsplash.jpg',
    'cole-ankney-ZdJ6eIKN3G0-unsplash.jpg',
    'todd-kent-178j8tJrNlc-unsplash.jpg',
    'jacques-bopp-Hh18POSx5qk-unsplash.jpg'
]);
