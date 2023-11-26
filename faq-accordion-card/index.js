function showAnswer(answer) {
    answer.parentNode.childNodes[1].classList.remove('collapsed');
    answer.classList.remove('hidden');
    answer.classList.add('shown');
}

function hideAnswer(answer) {
    answer.parentNode.childNodes[1].classList.add('collapsed');
    answer.classList.add('hidden');
    answer.classList.remove('shown');
}

document.getElementById('q1').addEventListener('click', function () {
    if (document.getElementById('a1').classList.contains('hidden')) {
        if (document.querySelector('.shown') !== null) {
            hideAnswer(document.querySelector('.shown'));
        }
        showAnswer(document.getElementById('a1'));
    } else {
        hideAnswer(document.getElementById('a1'));
    }
});

document.getElementById('q2').addEventListener('click', function () {
    if (document.getElementById('a2').classList.contains('hidden')) {
        if (document.querySelector('.shown') !== null) {
            hideAnswer(document.querySelector('.shown'));
        }
        showAnswer(document.getElementById('a2'));
    } else {
        hideAnswer(document.getElementById('a2'));
    }
});

document.getElementById('q3').addEventListener('click', function () {
    if (document.getElementById('a3').classList.contains('hidden')) {
        if (document.querySelector('.shown') !== null) {
            hideAnswer(document.querySelector('.shown'));
        }
        showAnswer(document.getElementById('a3'));
    } else {
        hideAnswer(document.getElementById('a3'));
    }
});

document.getElementById('q4').addEventListener('click', function () {
    if (document.getElementById('a4').classList.contains('hidden')) {
        if (document.querySelector('.shown') !== null) {
            hideAnswer(document.querySelector('.shown'));
        }
        showAnswer(document.getElementById('a4'));
    } else {
        hideAnswer(document.getElementById('a4'));
    }
});

document.getElementById('q5').addEventListener('click', function () {
    if (document.getElementById('a5').classList.contains('hidden')) {
        if (document.querySelector('.shown') !== null) {
            hideAnswer(document.querySelector('.shown'));
        }
        showAnswer(document.getElementById('a5'));
    } else {
        hideAnswer(document.getElementById('a5'));
    }
});
