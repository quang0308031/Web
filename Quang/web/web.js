document.addEventListener('DOMContentLoaded', (event) => {
    let observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    });
  
    const blocks = document.querySelectorAll('.tinanh, .tinchu');
  
    blocks.forEach(block => {
        observer.observe(block);
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
})