namespace PhotoGalleryModalScope {
  export class PhotoGalleryModal {
    private id: string
    private pathName: string
    private fileNameList: string[]
    private $imgs: any
    private $annexDestination: any
    private $div: any
    private $btnLt: any
    private $btnRt: any
    private $btnX: any
    private imgId!: number
    private imgTotal!: number
    private hideBtntime: number
    private hideBtntimeRef: any

    constructor(id: string, pathName: string, fileNameList: string[], hideBtntime = 1500, element: string = 'body') {
      this.id = id
      this.pathName = pathName
      this.fileNameList = fileNameList
      this.$imgs = document.querySelectorAll(`#${this.id} img`)
      this.$annexDestination = document.querySelector(element)
      this.$div = document.createElement('div')
      this.$btnLt = document.createElement('span')
      this.$btnRt = document.createElement('span')
      this.$btnX = document.createElement('span')
      this.hideBtntime = hideBtntime
      this.createPhotoGallery()
    }

    private createPhotoGallery() {
      // init
      this.imgId = 0
      this.imgTotal = this.$imgs.length
      this.$imgs.forEach((el: { addEventListener: (arg0: string, arg1: () => void) => void }, i: number) => {
        el.addEventListener('click', () => this.showPhotoGallery(this.imgId = i))
      })
      // add event
      this.$div.addEventListener('mousemove', () => this.toggleBtnArrows())
      this.$btnLt.addEventListener('click', () => this.previous())
      this.$btnRt.addEventListener('click', () => this.next())
      this.$btnX.addEventListener('click',() => this.hidePhotoGallery())
      // set style class
      this.$div.className = 'photo-gallery-modal'
      this.$btnLt.className = 'photo-gallery-modal__btn-lt--hide'
      this.$btnRt.className = 'photo-gallery-modal__btn-rt--hide'
      this.$btnX.className = 'photo-gallery-modal__btn-x--hide'
      // set style class & append child
      this.$imgs.forEach((el:any, i:number) => {
        const $clone = el.cloneNode(true)
        $clone.src = `${this.pathName}${this.fileNameList[i]}`
        $clone.className = 'photo-gallery-modal__img--hide'
        this.$div.appendChild($clone)
      })
      // append child
      this.$div.appendChild(this.$btnLt)
      this.$div.appendChild(this.$btnRt)
      this.$div.appendChild(this.$btnX)
      this.$annexDestination.appendChild(this.$div)
    }

    private toggleBtnArrows() {
      clearTimeout(this.hideBtntimeRef)
      this.$btnLt.className = 'photo-gallery-modal__btn-lt--show'
      this.$btnRt.className = 'photo-gallery-modal__btn-rt--show'
      this.$btnX.className = 'photo-gallery-modal__btn-x--show'
      if(this.imgTotal == 1) {
        this.$btnLt.className = 'photo-gallery-modal__btn-lt--hide'
        this.$btnRt.className = 'photo-gallery-modal__btn-rt--hide'
      }
      if(this.imgId == 0)
        this.$btnLt.className = 'photo-gallery-modal__btn-lt--hide'
      if(this.imgId == this.imgTotal - 1)
        this.$btnRt.className = 'photo-gallery-modal__btn-rt--hide'
      this.hideBtntimeRef = setTimeout(() => {
        this.$btnLt.className = 'photo-gallery-modal__btn-lt--hide'
        this.$btnRt.className = 'photo-gallery-modal__btn-rt--hide'
        this.$btnX.className = 'photo-gallery-modal__btn-x--hide'
      }, this.hideBtntime)
    }

    private showPhotoGallery(i: number) {
      this.toggleBtnArrows()
      this.$div.className = 'photo-gallery-modal--show'
      this.$div.childNodes[i].className = 'photo-gallery-modal__img--show'
    }

    private hidePhotoGallery() {
      this.$div.className = 'photo-gallery-modal'
      this.$div.childNodes[this.imgId].className = 'photo-gallery-modal__img--hide'
    }

    private next() {
      if(this.imgId < this.imgTotal - 1) {
        this.$div.childNodes[this.imgId++].className = 'photo-gallery-modal__img--hide'
        this.$div.childNodes[this.imgId].className = 'photo-gallery-modal__img--show'
      }
      this.toggleBtnArrows()
    }

    private previous() {
      if(this.imgId > 0) {
        this.$div.childNodes[this.imgId--].className = 'photo-gallery-modal__img--hide'
        this.$div.childNodes[this.imgId].className = 'photo-gallery-modal__img--show'
      }
      this.toggleBtnArrows()
    }
  }
}
