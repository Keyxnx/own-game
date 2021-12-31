import { v4 as uuidv4 } from 'uuid';

export const points = [100, 200, 300, 400, 500, 600, 700];

export const questions = {
    'Футбол': [{
        id: uuidv4(),
        question: 'Продолжительность футбольного тайма, в минутах?',
        answer: '90 мин',
        points: 100,
    }, {
        id: uuidv4(),
        question: 'Где был сыгран первый в мире кубок Фифа?',
        answer: 'Уругвай',
        points: 200,
    }, {
        id: uuidv4(),
        question: 'Какой клуб 5 раз подряд побеждал в ЛЧ в ХХ ст.?',
        answer: 'Реал Мадрид',
        points: 300,
    }, {
        id: uuidv4(),
        question: 'Какая страна больше всего раз побеждала на ЧМ?',
        answer: 'Бразилия',
        points: 400,
    }, {
        id: uuidv4(),
        question: 'Где был сыгран первый в мире кубок Фифа?',
        answer: 'Уругвай',
        points: 500,
    }, {
        id: uuidv4(),
        question: 'Где был сыгран первый в мире кубок Фифа?',
        answer: 'Уругвай',
        points: 600,
    }, {
        id: uuidv4(),
        question: 'Где был сыгран первый в мире кубок Фифа?',
        answer: 'Уругвай',
        points: 700,
    }],
    'География': [{
        id: uuidv4(),
        question: 'Столица Турции?',
        answer: 'Анкара',
        points: 100,
    }, {
        id: uuidv4(),
        question: 'Какая самая большая страна в Африке?',
        answer: 'Алжир',
        points: 200,
    }, {
        id: uuidv4(),
        question: 'Мистраль - это холодный или жаркий ветер?',
        answer: 'Холодный',
        points: 300,
    }, {
        id: uuidv4(),
        question: 'Что есть в пруду, озере, реке, но нет в океане?',
        answer: "буква 'р'",
        points: 400,
    }, {
        id: uuidv4(),
        question: 'Какая длина экватора Земли?',
        answer: '~40000км',
        points: 500,
    }, {
        id: uuidv4(),
        question: 'Какой самый высокий водопад в мире?',
        answer: 'Анхель',
        points: 600,
    }, {
        id: uuidv4(),
        question: 'Как называется инструмент для измерения относительной высоты?',
        answer: 'Нивелир',
        points: 700,
    }],
    'Угадай цену': [{
        id: uuidv4(),
        question: './img/mivina.png',
        answer: `5.90 грн. Погрешность: +- 1 грн.`,
        points: 100,
    }, {
        id: uuidv4(),
        question: './img/bmw.jpg',
        answer: `БЕСЦЕННА! -200, КСТАТИ`,
        points: 200,
    }, {
        id: uuidv4(),
        question: './img/otkrivashka.png',
        answer: 'Открывалка Padova. Стоимость: 275$. Погрешность: +-100$',
        points: 300,
    }, {
        id: uuidv4(),
        question: './img/Toaster.png',
        answer: 'Toaster Dolce & Gabbana. Стоимость: 499$. Погрешность: +-200$',
        points: 400,
    }, {
        id: uuidv4(),
        question: './img/balenciaga.png',
        answer: 'Стоимость: 739$. Погрешность: +-200$',
        points: 500,
    }, {
        id: uuidv4(),
        question: './img/bearbrick.png',
        answer: 'Bearbrick. Стоимость: 1700$. Погрешность: +-400',
        points: 600,
    }, {
        id: uuidv4(),
        question: './img/chess.jpg',
        answer: 'Charles Hollander Chess set. Стоимость: 500 000$. Погрешность: +-200 000$.',
        points: 700,
    }],
    'CS:GO': [{
        id: uuidv4(),
        question: 'Какая максимальная сумма может быть у игрока?',
        answer: '16000$',
        points: 100,
    }, {
        id: uuidv4(),
        question: 'Сколько денег дают за убийство с ножа?',
        answer: '1500$',
        points: 200,
    }, {
        id: uuidv4(),
        question: 'В каком году вышла CS:GO?',
        answer: '2012',
        points: 300,
    }, {
        id: uuidv4(),
        question: 'Какую роль выполняет люркер?',
        answer: 'Заходит в спину к вражеской команде',
        points: 400,
    }, {
        id: uuidv4(),
        question: 'Сколько званий в CS:GO?',
        answer: '18 :)',
        points: 500,
    }, {
        id: uuidv4(),
        question: 'Лучший игрок 2019 года по версии HLTV.org?',
        answer: 'ZyWoo',
        points: 600,
    }, {
        id: uuidv4(),
        question: 'Сколько раз fast принимал удачно B side?',
        answer: 'Любой ответ принимается - +700',
        points: 700,
    }],
    'Математика': [{
        id: uuidv4(),
        question: 'Как по-другому можно назвать 2R круга?',
        answer: 'Диаметр',
        points: 100,
    }, {
        id: uuidv4(),
        question: 'Сколько будет один да один, да полтора, да два, да два, да два с половиной?',
        answer: '10',
        points: 200,
    }, {
        id: uuidv4(),
        question: 'Сколько граней у Египетской пирамиды?',
        answer: '4',
        points: 300,
    }, {
        id: uuidv4(),
        question: 'сколько будет в 19²?',
        answer: '361',
        points: 400,
    }, {
        id: uuidv4(),
        question: 'Вопроса нет хыхы, +500 баллов',
        answer: '+500',
        points: 500,
    }, {
        id: uuidv4(),
        question: 'Как известно(нет), сумма всех чисел в рулетке казино равна 666, чему равно произведение?',
        answer: '0',
        points: 600,
    }, {
        id: uuidv4(),
        question: './img/oktaedr.png',
        answer: 'Октаэдр',
        points: 700,
    }],
    'Космос': [{
        id: uuidv4(),
        question: 'Какая страна первой запустила спутник?',
        answer: 'СССР',
        points: 100,
    }, {
        id: uuidv4(),
        question: 'Абсолютно все звезды излучают свет? Да или Нет',
        answer: 'Да',
        points: 200,
    }, {
        id: uuidv4(),
        question: 'Что является причиной образования кратеров на Луне?',
        answer: 'Метеориты',
        points: 300,
    }, {
        id: uuidv4(),
        question: 'Как звали человека, который первым высадился на Луну?',
        answer: 'Нил Армстронг',
        points: 400,
    }, {
        id: uuidv4(),
        question: 'Как называется ближайшая к Солнцу планета?',
        answer: 'Меркурий',
        points: 500,
    }, {
        id: uuidv4(),
        question: 'какая планета обладает самым большим кольцом?',
        answer: 'Сатурн',
        points: 600,
    }, {
        id: uuidv4(),
        question: 'Какая Галактика расположена ближе всего к нашей?',
        answer: 'Галактика Андромеды',
        points: 700,
    }],
    'Автомобили': [{
        id: uuidv4(),
        question: 'Чем вместо бензина заправляли самый первый автомобиль?',
        answer: 'Дровами',
        points: 100,
    }, {
        id: uuidv4(),
        question: 'Назовите устройство, придающее автомобилю ускорение с отрицательным знаком',
        answer: 'Тормоз',
        points: 200,
    }, {
        id: uuidv4(),
        question: 'Самолётная деталь в автомобиле – это…?',
        answer: 'Крыло',
        points: 300,
    }, {
        id: uuidv4(),
        question: 'Как называется часть автомобиля, в которой химическая энергия топлива преобразуется в механическую?',
        answer: 'Двигатель',
        points: 400,
    }, {
        id: uuidv4(),
        question: 'Как называется счётчик пробега автомобиля?',
        answer: 'Одометр',
        points: 500,
    }, {
        id: uuidv4(),
        question: 'Земноводный автомобиль?',
        answer: 'Машина-Амфибия',
        points: 600,
    }, {
        id: uuidv4(),
        question: './img/vaz.png',
        answer: 'ВАЗ 2107',
        points: 700,
    }],
    'Мемология': [{
        id: uuidv4(),
        question: './img/aksioma eskobara.png',
        answer: 'Аксиома Эскобара',
        points: 100,
    }, {
        id: uuidv4(),
        question: './img/ya-s-patsanami.jpg',
        answer: 'Я с пацанами',
        points: 200,
    }, {
        id: uuidv4(),
        question: './img/SHINGIS.png',
        answer: 'ШЫНГЫС, ПРИВЕТ ТЫ ЧО АХУЕЛ?',
        points: 300,
    }, {
        id: uuidv4(),
        question: './img/SHTOSH.png',
        answer: 'ШТОШ',
        points: 400,
    }, {
        id: uuidv4(),
        question: './img/Shlakoblokun.png',
        answer: 'ШЛАКОБЛОКУНЬ',
        points: 500,
    }, {
        id: uuidv4(),
        question: './img/ya-eblan.jpg',
        answer: 'Я еблан',
        points: 600,
    }, {
        id: uuidv4(),
        question: './img/roi-pidril.png',
        answer: 'Рой Пидриллы',
        points: 700,
    }],
    'Фильмы/Сериалы ': [{
        id: uuidv4(),
        question: './img/dead-pool.png',
        answer: 'ДЕД-ПУЛ 2',
        points: 100,
    }, {
        id: uuidv4(),
        question: './img/rapsodiya.png',
        answer: 'Богемская рапсодия',
        points: 200,
    }, {
        id: uuidv4(),
        question: './img/addams.png',
        answer: 'СЕМЕЙКА АДДАМС',
        points: 300,
    }, {
        id: uuidv4(),
        question: './img/Syu.png',
        answer: 'Кудряшка Сью',
        points: 400,
    }, {
        id: uuidv4(),
        question: './img/YAGO.jpg',
        answer: 'ЯГО',
        points: 500,
    }, {
        id: uuidv4(),
        question: 'Навернуть бокальчик, +600 :)',
        answer: '+600',
        points: 600,
    }, {
        id: uuidv4(),
        question: 'Сколько градусов должно быть в настоящем коньяке',
        answer: '40-42°',
        points: 700,
    }],
    'Ребусы': [{
        id: uuidv4(),
        question: './img/go-blin.png',
        answer: 'ГО-БЛИН',
        points: 100,
    }, {
        id: uuidv4(),
        question: './img/vas-il-isk.png.png',
        answer: 'ВАС-ИЛ-ИСК',
        points: 200,
    }, {
        id: uuidv4(),
        question: './img/Oks-ford.png',
        answer: 'ОКСФОРД',
        points: 300,
    }, {
        id: uuidv4(),
        question: './img/neb-raska.png',
        answer: 'Небраска',
        points: 400,
    }, {
        id: uuidv4(),
        question: './img/pri-pyat.jpg',
        answer: 'ПРИПЯТЬ',
        points: 500,
    }, {
        id: uuidv4(),
        question: './img/Plastelin.jpg',
        answer: '600',
        points: 600,
    }, {
        id: uuidv4(),
        question: 'Сколько градусов должно быть в настоящем коньяке',
        answer: '40-42°',
        points: 700,
    }],
}

