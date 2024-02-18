const root = document.querySelector('#root');

const wrapper = document.createElement('main');
wrapper.className = 'wrapper';

//1. ----------------------------------------------------------------------------Header---------------------------------------------------------------------------------//

// Header
const header = document.createElement('header');
header.className = 'header';

// Header Logo
const headerLogoLink = document.createElement('a');
headerLogoLink.href = "http://localhost:1234/";

import wildberries from './assets/img/Wildberries.svg';

const headerLogo = document.createElement('img');
headerLogo.className = 'header__logo';
headerLogo.type = 'button';
headerLogo.src = wildberries;
headerLogo.alt = 'Wildberries';

// Header Input
const headerInput = document.createElement('input');
headerInput.className = 'header__input';
headerInput.type = 'text';
headerInput.placeholder = 'Find on Wildberries';
headerInput.value = '';

// Обработчик события input для фильтрации карточек по введенному тексту
headerInput.addEventListener('input', (event) => {
    const searchValue = event.target.value.toLowerCase(); // Получаем введенный текст и приводим к нижнему регистру
    const shoppingCards = document.querySelectorAll('.shopping__card'); // Выбираем все карточки

    // Проходимся по каждой карточке и скрываем те, которые не соответствуют введенному тексту
    shoppingCards.forEach(card => {
        const cardName = card.querySelector('.shopping__card-name').textContent.toLowerCase(); // Получаем текстовое содержимое карточки и приводим к нижнему регистру
        if (cardName.includes(searchValue)) {
            card.style.display = 'block'; // Если текст карточки содержит введенный текст, показываем карточку
        } else {
            card.style.display = 'none'; // Иначе скрываем карточку
        }
    });
});

import loupe from './assets/img/loupe-svg.svg';

const loupeImageInInput = document.createElement('img');
loupeImageInInput.className = 'loupe__image';
loupeImageInInput.src = loupe;
loupeImageInInput.alt = 'Loupe';

// Header Basket
const basketContainer = document.createElement('div');
basketContainer.className = 'header__basket';

import basket from './assets/img/basket.svg';

const basketImage = document.createElement('img');
basketImage.className = 'header__basket-image';
basketImage.src = basket;
basketImage.alt = 'Basket';

const basketText = document.createElement('span');
basketText.className = 'header__basket-text';
basketText.textContent = 'Корзина';

// Создаем элемент для счетчика товаров в корзине
const basketCounter = document.createElement('div');
basketCounter.className = 'header__basket-counter';
basketCounter.textContent = '0';
//------------------------------------------------------------------------------Header---------------------------------------------------------------------------------//

//2. ---------------------------------------------------------------------------Slider---------------------------------------------------------------------------------//

import sliderImage1 from './assets/img/slider.webp';
import sliderImage2 from './assets/img/slider2.webp';
import sliderImage3 from './assets/img/slider3.webp';

// Создаем контейнер для слайдера
const sliderContainer = document.createElement('div');
sliderContainer.id = 'slider';
sliderContainer.className = 'slider';

// Данные о слайдах
const slidesData = [
    { content: sliderImage1 },
    { content: sliderImage2 }, 
    { content: sliderImage3 }  
];

// Создаем контейнер для слайдов
const slidesContainer = document.createElement('div');
slidesContainer.id = 'slides';
slidesContainer.className = 'slider__slides';

// Создаем кнопки "назад" и "вперед"
const prevButton = document.createElement('button');
prevButton.id = 'prev';
prevButton.className = 'slider__prev';
prevButton.textContent = '‹';

const nextButton = document.createElement('button');
nextButton.id = 'next';
nextButton.className = 'slider__next';
nextButton.textContent = '›';

// Создаем контейнер для точек (индикаторов слайдов)
const dotsContainer = document.createElement('div');
dotsContainer.id = 'dots';
dotsContainer.className = 'slider__dots';

// Проходимся по каждому слайду и добавляем его в слайдер
slidesData.forEach((slide, index) => {
    const slideElement = document.createElement('div');
    slideElement.className = 'slide';

    // Если контент слайда - изображение, создаем элемент img и добавляем его в слайд
    if (slide.content.includes('.jpg') || slide.content.includes('.png') || slide.content.includes('.webp')) {
        const image = document.createElement('img');
        image.src = slide.content;
        image.alt = 'Slide';
        slideElement.appendChild(image);
    } else {
        slideElement.textContent = slide.content; // Иначе добавляем текстовый контент в слайд
    }

    slidesContainer.appendChild(slideElement); // Добавляем слайд в контейнер слайдов

    // Создаем точку (индикатор) для этого слайда
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.dataset.slideIndex = index; // Устанавливаем индекс слайда для дальнейшего обновления
    dotsContainer.appendChild(dot); // Добавляем точку в контейнер точек
});

let currentIndex = 0; // Индекс текущего слайда (по умолчанию - первый)

// Добавляем обработчики событий для кнопок "назад" и "вперед"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
    updateSlide(); // Обновляем отображение слайдов
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slidesData.length;
    updateSlide(); // Обновляем отображение слайдов
});

// Добавляем обработчик события для точек (индикаторов слайдов)
dotsContainer.addEventListener('click', event => {
    const dot = event.target.closest('.dot');
    if (dot) {
        currentIndex = parseInt(dot.dataset.slideIndex);
        updateSlide(); // Обновляем отображение слайдов
    }
});

// Функция для автоматического переключения слайдов
const startSlideShow = () => {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slidesData.length;
        updateSlide();
    }, 3000);
};

// Функция для обновления отображения слайдов
const updateSlide = () => {
    const slides = document.querySelectorAll('.slide'); // Выбираем все слайды
    const dots = document.querySelectorAll('.dot'); // Выбираем все точки

    // Проходимся по каждому слайду и скрываем или показываем его в зависимости от текущего индекса
    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? 'block' : 'none';
    });

    // Подсвечиваем текущую точку, убирая подсветку у остальных
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
};

document.addEventListener("DOMContentLoaded", function() {
    updateSlide(); // Вызываем функцию updateSlide() после загрузки контента страницы
    startSlideShow(); // Запускаем автоматическое переключение слайдов
});

// Добавляем стрелки и точки внутрь слайдера
sliderContainer.append(prevButton, slidesContainer, nextButton, dotsContainer);

//--------------------------------------------------------------------------------Slider---------------------------------------------------------------------------------//

// 3. ----------------------------------------------------------------------------Shopping Cards------------------------------------------------------------------------ //
const allShoppingCards = document.createElement('div');
allShoppingCards.className = 'shopping__cards';

// Объявляем переменную totalPrice для хранения общей суммы всех товаров в корзине
 let totalPrice = 0;

// Получаем данные с сервера
fetch('https://65ca55fb3b05d29307e02af2.mockapi.io/users')
    .then(response => response.json())
    .then(data => {
        // Создаем карточки на основе полученных данных
        data.forEach(item => {
            const shoppingCard = document.createElement('div');
            shoppingCard.className = 'shopping__card';

            // Создаем изображение
            const image = document.createElement('img');
            image.className = 'shopping__card-image'
            image.src = item.image + '?random=' + Math.random();
            image.alt = 'Product Image';

            // Создаем элементы для отображения информации о товаре
            const price = document.createElement('h3');
            price.className = 'shopping__card-price'
            price.textContent = `${item.price} р.`;

            const date = document.createElement('p');
            date.className = 'shopping__card-date'
            date.textContent = `Послезавтра`;

            const name = document.createElement('p');
            name.className = 'shopping__card-name'
            name.textContent = item.name;

            const rate = document.createElement('p');
            rate.className = 'shopping__card-rate'
            rate.textContent = `★ ${item.rate}`;

            const reviews = document.createElement('p');
            reviews.className = 'shopping__card-reviews'
            reviews.textContent = `${item.reviews} отзывов`;

            // Создаем кнопку "В корзину"
            const shoppingCardAddBtn = document.createElement('input');
            shoppingCardAddBtn.className = 'shopping__card-addbtn';
            shoppingCardAddBtn.type = 'button';
            shoppingCardAddBtn.value = 'В корзину';

            // Добавляем все созданные элементы в карточку
            shoppingCard.appendChild(image);
            shoppingCard.appendChild(price);
            shoppingCard.appendChild(date);
            shoppingCard.appendChild(name);
            shoppingCard.appendChild(rate);
            shoppingCard.appendChild(reviews);
            shoppingCard.appendChild(shoppingCardAddBtn);

            // Добавляем карточку в контейнер всех карточек
            allShoppingCards.appendChild(shoppingCard);

            // Обработчик клика на кнопку "В корзину"
            shoppingCardAddBtn.addEventListener('click', () => {
                const cardItemInBasket = document.createElement('div');
                cardItemInBasket.className = 'card__item';

                const itemName = document.createElement('div');
                itemName.className = 'modal__window-item';
                itemName.textContent = item.name;

                const itemPrice = document.createElement('div');
                itemPrice.className = 'modal__window-price';
                itemPrice.textContent = `${item.price} р.`;

                cardItemInBasket.appendChild(itemName);
                cardItemInBasket.appendChild(itemPrice);

                // Увеличиваем значение счетчика товаров в корзине при добавлении нового товара
                let count = parseInt(basketCounter.textContent);
                count++;
                basketCounter.textContent = count; // Обновляем текст счетчика

                // Проверяем, если счетчик равен 0, то показываем его, иначе скрываем
                basketCounter.style.display = count === 0 ? 'none' : 'block';

                modalWindow.appendChild(cardItemInBasket);

                // Обновляем значение суммы цен всех товаров в корзине
                totalPrice += parseFloat(item.price);

                // Создаем элемент для отображения общей суммы цен всех товаров в корзине
                const itemPriceAll = document.querySelector('.modal__window-priceall');
                if (itemPriceAll) {
                    itemPriceAll.textContent = `Итого: ${totalPrice.toFixed(2)} р.`;
                } else {
                    const newItemPriceAll = document.createElement('div');
                    newItemPriceAll.textContent = `Итого: ${totalPrice.toFixed(2)} р.`;
                    newItemPriceAll.className = 'modal__window-priceall';
                    modalWindow.appendChild(newItemPriceAll);
                }
            });
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
//-------------------------------------------------------------------------------Shopping Cards------------------------------------------------------------------------ //

// 4. ----------------------------------------------------------------------------Basket Model Window------------------------------------------------------------------- //
const modalWindow = document.createElement('div')
modalWindow.className = 'modal__window'

const modalWindowHeader = document.createElement('header')
modalWindowHeader.className = 'modal__window_header'

const modalWindowHeaderTitle = document.createElement('h1')
modalWindowHeaderTitle.className = 'modal__window_header-title'
modalWindowHeaderTitle.innerText = 'Корзина'

const modalWindowHeaderBtn = document.createElement('input')
modalWindowHeaderBtn.className = 'modal__window_header-btn'
modalWindowHeaderBtn.type = 'button'
modalWindowHeaderBtn.value = 'Очистить корзину'

// Добавляем переменную для отслеживания состояния модального окна
let isModalOpen = false;

// Обработчик клика на корзину
basketContainer.addEventListener('click', (event) => {
    // Проверяем, открыто ли модальное окно
    if (!isModalOpen) {
        modalWindow.style.display = 'block';
        isModalOpen = true; // Устанавливаем флаг, что модальное окно открыто
    }
    // Предотвращаем распространение события, чтобы оно не дошло до document.addEventListener
    event.stopPropagation();
});

// Обработчик клика вне модального окна
document.addEventListener('click', (event) => {
    // Проверяем, был ли клик сделан вне модального окна
    if (!modalWindow.contains(event.target) && event.target !== basketContainer) {
        modalWindow.style.display = 'none'; // Закрываем модальное окно
        isModalOpen = false; // Сбрасываем флаг состояния модального окна
    }
});

// Обработчик клика на кнопку "Очистить корзину"
modalWindowHeaderBtn.addEventListener('click', () => {
    // Удаляем только элементы, представляющие товары в корзине
    const cardItems = modalWindow.querySelectorAll('.card__item');
    cardItems.forEach(cardItem => {
        modalWindow.removeChild(cardItem);
    });
    const itemPriceAll = modalWindow.querySelectorAll('.modal__window-priceall');
    itemPriceAll.forEach(itemPriceAll => {
        modalWindow.removeChild(itemPriceAll);
    });

    // Обновляем счетчик товаров в корзине
    basketCounter.textContent = '0';
    if (parseInt(basketCounter.textContent) === 0) {
        basketCounter.style.display = 'none';
    } else {
        basketCounter.style.display = 'block';
    }
});
// --------------------------------------------------------------------------------Basket Model Window------------------------------------------------------------------ //

root.append(wrapper);
wrapper.append(header, sliderContainer, allShoppingCards, modalWindow);
header.append(headerLogoLink, headerInput, basketContainer);

headerLogoLink.appendChild(headerLogo);
headerInput.appendChild(loupeImageInInput);

basketContainer.appendChild(basketImage);
basketContainer.appendChild(basketText);
basketContainer.appendChild(basketCounter);

modalWindow.appendChild(modalWindowHeader)
modalWindowHeader.appendChild(modalWindowHeaderTitle)
modalWindowHeader.appendChild(modalWindowHeaderBtn)




