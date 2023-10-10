document.addEventListener('DOMContentLoaded', (event) => {
    let observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    });
  
    const img_blocks = document.querySelectorAll('.tinanh');
    const text_blocks = document.querySelectorAll('.tinchu');
  
    img_blocks.forEach((block) => {
      observer.observe(block);
      text_blocks.forEach((bl) => {
        setTimeout(function(){
          observer.observe(bl)
        }, 400);
      });
    });
});
  
document.addEventListener('scroll', (event) => {
  let observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  });

  const line_blocks = document.querySelectorAll('.line_blocks');

  line_blocks.forEach((lineBlock, index_l) => {
    setTimeout(function(){
      observer.observe(lineBlock);
      let blocks = lineBlock.querySelectorAll('.tin_25');
      let observer_b = new IntersectionObserver(function(entries, observer) {
        entries.forEach((entry) => {
          if(entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      });
      blocks.forEach((block, index) => {
        setTimeout(function(){
          observer_b.observe(block);
        }, index * 200);
      });
    }, index_l * 1200);
  });
});

document.addEventListener('scroll', (event) => {
  let observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  });

  const map = document.querySelectorAll('.map');

  map.forEach((map, index) => {
    setTimeout(function() {
      observer.observe(map);
    }, (index + 1) * 500);
  });
});


function displayContent(id, buttom) {
  var i, contentBlocks, listButtom;
  contentBlocks = document.getElementsByClassName("display");
  listButtom = document.getElementsByClassName("buttom")
  for (i = 0; i < contentBlocks.length; i++) {
      contentBlocks[i].style.display = "none";
      listButtom[i].style.backgroundColor = "#7996A4";
  }
  document.getElementById(id).style.display = "flex";
  document.getElementById(buttom).style.backgroundColor = "#0A3643"
};

document.addEventListener('scroll', (event) => {
  let observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  });

  const img_blocks = document.querySelectorAll('.tinanh1');
  const text_blocks = document.querySelectorAll('.tinchu1');

  img_blocks.forEach((block) => {
    observer.observe(block);
    text_blocks.forEach((bl) => {
      setTimeout(function(){
        observer.observe(bl)
      }, 400);
    });
  });
});