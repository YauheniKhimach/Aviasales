const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = document.querySelector('.input__cities-from'),
    dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
    dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
    inputCitiesTo = document.querySelector('.input__cities-to'),
    inputDateDepart = document.querySelector('.input__date-depart');

const city = ['Москва', 'СПБ', 'Минск', 'Караганда', 'Челябинск', 'Самара', 'Волгогдар', 'Днепропетровск', 'Екатеринбкрг',
    'Ухань', 'Одесса', 'Керчь', 'Коркино', 'Томск', 'Нижний Новгород', 'Волгоград', 'Ростов-на-дону'];

const showCity = (input, list) => {
    list.textContent = '';

    if (input.value !== '') {

        const filterCity = city.filter((item) => {
            const fixItem = item.toLowerCase();
            return fixItem.includes(input.value.toLowerCase());
        });
        filterCity.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dropdown__city');
            li.textContent = item;
            list.append(li);
        });
    }
};

inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom,dropdownCitiesFrom)
});

dropdownCitiesFrom.addEventListener('click', (event) => {
    const target = event.target;
    if(target.tagName.toUpperCase() === 'LI') {
        inputCitiesFrom.value = target.textContent;
        dropdownCitiesFrom.textContent = '';
    }
});
