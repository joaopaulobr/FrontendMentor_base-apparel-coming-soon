var validEmail = true;

function submitEmail(){
    var input = document.getElementById('custom-input');
    var button = document.getElementById('custom-buttom');
    var error = document.getElementById('error-message');

    if(!input.value.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim)){
        button.classList.add('invalid');
        input.classList.add('invalid');
        error.classList.add('invalid');
        validEmail = false;
    }else{
        button.classList.remove('invalid');
        input.classList.remove('invalid');
        error.classList.remove('invalid');
        validEmail = true;
    }
}