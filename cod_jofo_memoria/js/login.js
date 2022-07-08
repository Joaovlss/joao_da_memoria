const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')

const validateinput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
    }else {
        button.setAttribute('disabled', '')
    }
}

input.addEventListener('input', validateinput)