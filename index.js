// = Show more implementation
const content = document.querySelector('.content-cards.hidden');

function showMore(){
    const hiddenContent = document.querySelector('.content-cards.hidden');
    hiddenContent.classList.toggle('hidden');

    hiddenContent.scrollIntoView({ behavior: 'smooth' });
};