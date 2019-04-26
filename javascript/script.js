function animatedForma() {
    const arrows = document.querySelector('.fa-arrow-down');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nexElementSibling;

            //check for validation
            if (input.type === 'text' && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else if (input.type === 'email' && validateEmail) {
                nextSlide(parent, nextForm)
            } else if (input.type === 'password' && validateUser(input)) {
                nextSlide(parent, nextForm)
            }else{
                parent.style.animation = 'shake 0.5s ease';
            }
            //get rind of animation
            parent.addEventListener('animated', () => {
                parent.style.animation = '';
            });
        });
    });
}

function nextSlide(parent, nextForm) {
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function validateUser(user) {
    if (user.value.lenght < 6) {
        console.log('not enough characters');
        error('rgb(189, 87, 87)');
    } else {
        error('rgb(189, 87, 87)');
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[ˆ\s@]+@[ˆ\s@]+\.[ˆ\s@]+$/;
    if (validation.test(email.value)) {
        error('rgb(189, 87, 87)');
        return true;
    } else {
        error('rgb(189, 87, 87)');
    }
}

function error(color) {
    document.body.style.backgroundColor = color;
}