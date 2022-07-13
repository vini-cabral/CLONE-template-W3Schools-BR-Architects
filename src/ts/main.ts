const $burgerPilot: any = document.getElementById("header__burger-pilot")
document.querySelectorAll("#header nav a").forEach(a => a.addEventListener("click", () => $burgerPilot.checked = false))

new PhotoGalleryModalScope.PhotoGalleryModal(
  'projects__gallery',
  './assets/img/gallery/',
  [
    'terrah-holly-pmhdkgRCbtE-unsplash.jpg',
    'dillon-kydd-XGvwt544g8k-unsplash.jpg',
    'alejandra-cifre-gonzalez-ylyn5r4vxcA-unsplash.jpg',
    'josh-hild-6kVGxIHriTA-unsplash.jpg',
    'oliur-POycdKPE8KQ-unsplash.jpg',
    'cole-ankney-ZdJ6eIKN3G0-unsplash.jpg',
    'todd-kent-178j8tJrNlc-unsplash.jpg',
    'jacques-bopp-Hh18POSx5qk-unsplash.jpg'
  ]
)