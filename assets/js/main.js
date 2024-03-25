const screens = document.querySelectorAll('.screen');
const steps = document.querySelectorAll('.md-step');
const btnSubjesctSave = document.getElementById('btnSubjectSave')
const txtSubjectName=document.getElementById('txtSubjectName')

// Arrays Data

let subjestData = []


const DISPLAY_PROPS = {
    NONE: 'none',
    BLOCK: "block"
}


const MODE = {
    Insert: 1,
    Edit: 2
}


let pageMode;

const hideAllScreens = () => {
    Array.from(screens).forEach(screen => {
        screen.style.display = DISPLAY_PROPS.NONE;
    })
    Array.from(steps).forEach(step => step.classList.remove('active'))
}

const addScreenChangeEventListiner = () => {
    Array.from(steps).forEach(step => {
        step.addEventListener('click', (e) => {
            const screenId = e.target.closest('.md-step')
                .querySelector('.md-step-circle span').textContent;
            changeScreen(screenId)
        })
    })
}


const addSubjectEventListiner = () => {
    btnSubjesctSave.addEventListener('click', saveSubject)
}



const saveSubject = () => {
 
}

const addAllEventListiners = () => {
    addScreenChangeEventListiner();
}


const changeScreen = (screenId) => {
    hideAllScreens()
    let selectedScreen = document.getElementById(`screen-${screenId}`)
    // Defensive Coding
    if (!selectedScreen) {
        throw new Eror('Screen with this in dose not exist')
    }
    selectedScreen.style.display = DISPLAY_PROPS.BLOCK;

    document.getElementById(`step-${screenId}`).classList.add('active')

}




const onLoad = () => {
    changeScreen('1')
    addAllEventListiners();
    pageMode = MODE.Insert;

}

document.addEventListener('DOMContentLoaded', onLoad);