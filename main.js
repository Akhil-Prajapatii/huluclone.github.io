let tabs = document.querySelectorAll('[data-tab-target]');
let tabContent = document.querySelectorAll('.sec3-tabs');
let container = document.querySelector('.section-3');
const mediaQuery = window.matchMedia('(min-width: 1024px)');
let accordion = document.querySelectorAll('.accordion');


let currTab = '#tab-1';

function background(currTab){
    console.log('yes');
    if(mediaQuery.matches){
        if(currTab === '#tab-1'){
            container.style = `background:linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%) ,url('img/live-sports.jpg') no-repeat 0% 0% / cover;`
        }else if(currTab === '#tab-2'){
            container.style= `background:linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%),url('img/live-news.jpg') no-repeat 0% 0% / cover;`
        }else{
            container.style = `background:linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%) ,url('img/events.jpg') no-repeat center 0% / cover;`
        }
        return;
    }
    if(currTab === '#tab-1'){
        container.style = `background:linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%) ,url('img/live-sports-small.jpg') no-repeat center 80% / cover;`
    }else if(currTab === '#tab-2'){
        container.style= `background:linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%),url('img/live-news-small.jpg') no-repeat center 80% / cover;`
    }else{
        container.style = `background:linear-gradient(90deg, rgba(0, 0, 0, 0.8) -57.5%, rgba(0, 0, 0, 0) 98.72%) ,url('img/events-small.jpg') no-repeat center 80% / cover;`
    }
}
// debugger;
window.addEventListener('resize',() => {
    background(currTab);
});

tabs.forEach(tab => {
    tab.addEventListener('click',() => {
        // debugger;
        currTab = tab.dataset.tabTarget;
        let target = document.querySelector(tab.dataset.tabTarget);
        tabContent.forEach(content => { content.classList.remove('active');})
        target.classList.add('active');
        
        background(currTab);
    })
})

accordion.forEach(e => {
    e.addEventListener('click',function(){
        // console.log(e.classList);
        this.classList.toggle('footer-active');

        let panel = this.nextElementSibling;

        // if(panel.style.display === 'block'){
        //     panel.style.display = 'none';
        // }else{
        //     panel.style.display = 'block';
        // }

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
    })
})





