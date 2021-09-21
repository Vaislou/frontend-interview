document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
    const formInput = document.querySelector('.form__input');
    

    form.addEventListener('submit', async e => {
        e.preventDefault();

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'phone',
              body: formInput.value.trim(),
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const date = await response.json();

        document.querySelector('.modal').textContent = `Введенный номер - ${date.body}`;
        document.querySelector('.modal').style.opacity = '1';
    })

})