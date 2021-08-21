
const theme = localStorage.getItem('theme');

if( theme == null){
    setTheme('green')
}else{
    setTheme(theme)
};


let themeDots = document.getElementsByClassName('theme-dot');


for(let i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        console.log('clicked:', mode)
        setTheme(mode);
    });
};

function setTheme(mode){
    if(mode == 'green'){
        document.getElementById('theme-style').href = 'themeCss/greenSheet.css'
    }

    if(mode == 'light'){
        document.getElementById('theme-style').href = 'stylesheet.css'
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'themeCss/blueSheet.css'
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = "themeCss/purpleSheet.css"
    }

    localStorage.setItem('theme', mode)
}