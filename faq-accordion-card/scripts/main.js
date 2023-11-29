function showAnswer(answer) {
    answer.parentNode.querySelector('button.question').classList.remove('collapsed');
    answer.classList.remove('hidden');
    answer.classList.add('shown');
}

function hideAnswer(answer) {
    answer.parentNode.querySelector('button.question').classList.add('collapsed');
    answer.classList.add('hidden');
    answer.classList.remove('shown');
}


for (let i = 0; i < document.querySelectorAll('.accordionItem').length; i++) {

    const accordion = document.querySelectorAll('.accordionItem')[i];
    const accordionQuestion = accordion.querySelector('button.question');
    const accordionAnswer = accordion.querySelector('p.answer');

    accordionQuestion.addEventListener('click', () => {
        if (accordionAnswer.classList.contains('hidden')) {
            if (document.querySelector('.shown')) {
                hideAnswer(document.querySelector('.shown'));
            }
            showAnswer(accordionAnswer);
        } else {
            hideAnswer(accordionAnswer);
        }
    });

}
