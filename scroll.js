
const stickySections = [...document.querySelectorAll('.sticky_wrap')]







window.addEventListener('scroll', (e) => {
  for (let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i])
  }

  const element = document.querySelector(".speech");
  const scrollY = window.scrollY;
  if (3300 < scrollY) {

    const a = scrollY - 3300
    element.style.opacity = 0;
    if (a > 0) {
      element.style.opacity += a * 0.003
    }

  } else {
    element.style.opacity = 0
  }
})

function transform(section) {

  const offsetTop = section.parentElement.offsetTop;

  const scrollSection = section.querySelector('.horizontal_scroll')

  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

  percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;

  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}