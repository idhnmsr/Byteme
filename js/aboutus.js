
  function showFullParagraph() {
    let paragraph = document.querySelector('.my-paragraph');
    paragraph.classList.toggle('show-full');
    let button = document.querySelector('.read-more-button');
    if (button.innerHTML === "Read more") {
      button.innerHTML = "Read less";
    } 
    else {
      button.innerHTML = "Read more";
    }
  }
