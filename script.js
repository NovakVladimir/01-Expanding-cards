const penals = document.querySelectorAll('.panel');

penals.forEach((penal)=>{
    penal.addEventListener('click', () =>{
        removeActiveClasses();
        penal.classList.add('active');
    })
})

function removeActiveClasses() {
    penals.forEach(penal => {
        penal.classList.remove('active');
    })
}