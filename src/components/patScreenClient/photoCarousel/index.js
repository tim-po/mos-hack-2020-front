import React, {  useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import AnimalInfo from '../animalInfo';
import MainInfo from '../mainInfo';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './patScreenClient.scss';
import '../../../global.scss';

import urna from '../../img/urna.svg';



function PhotoCarouselClient(props) {

    const [state, setState] = useState(
        {
            "id": "1665з-20",
            "общие  сведения": {
                "Вид:": "Псина Бездомная",
                "Возраст:": "69",
                "Вес:": "32",
                "Кличка:": "Неола",
                "Пол:": "Мужской",
                "Порода:": "Митис",
                "Окрас:": "Черепаховый",
                "Шерсть:": "Длинная",
                "Уши:": "Висячие",
                "Хвост:": "Обычный",
                "Размер:": "Малый",
                "Особые:": "Нет",
                "Вольер №:": "45",
            },
            "дополнительные сведения": {
              "Идентификационная метка:": "12345",
              "Дата стерилизации:": "25.08.21",
              "Ф.и.о. ветеринарного врача:": " Пупкин Василий Александрович",
              "Социализировано:": false
            },
            "сведения об отлове": {
              "заказ-наряд / акт о поступлении животного №:": "АКТ№647236538",
              "заказ-наряд дата/ акт о поступлении животного, дата":"23.09.21",
              "административный округ": "Санкт-Петербург",
              "акт отлова №": "АКТ№46741764",
              "адрес места отлова" : "Улица Пушкина"
            },
            "сведения о новых владельцах": {
              "юридическое лицо": "Иванов Иван",
              "ф.и.о. опекунов": "Какой-то Антон Дмитриевич",
              "физическое лицо ф.и.о.": "Какой-то Антон Дмитриевич"
            },
            "движение животного": {
              "дата поступления в приют": "23.09.21",
              "акт №": "АКТ№46741764",
              "дата выбытия из приюта": "23.09.21",
              "причина выбытия": "Пил в клетке",
              "акт/договор №": "АКТ№46741764"
            },
            "ответственные за животное": {
              "адрес приюта": "Улица Васи",
              "эксплуатирующая организация": "РГКГПРКГГ",
              "ф.и.о. руководителя приюта": "Какой-то Антон Дмитриевич",
              "ф.и.о. сотрудника по уходу за животным": "Какой-то Антон Дмитриевич"
            },
            "сведения об обработке от экто- и эндопаразитов": {
              "№ п/п": "АКТ№46741764",
              "дата": "23.09.21",
              "название препарата": "Витамин",
              "доза": "0.5"
            },
            "сведения о вакцинации": {
              "№ п/п": "АКТ№46741764",
              "дата": "23.09.21",
              "вид вакцины": "Обычная",
              "№ серии": "71348713"
            },
            "сведения о состоянии здоровья": {
              "дата осмотра": "23.09.21",
              "анамнез": "да"
            }
          }
    );

    return (
        <div className={"container"}>
            <div className={"horizontal_container"}>
                <div className={"button_container"}>
                        <div className={"photo_1"}>
                            <Carousel showThumbs={false} renderIndicator={null}>
                                <img className={"photo"} src="https://wl-adme.cf.tsp.li/resize/728x/jpg/79e/c49/44a2895f18b7659744e7edf1a5.jpg" alt={''} />
                                <img className={"photo"} src="https://faunistics.com/wp-content/uploads/2019/12/1-6.jpg" alt={''}/>
                                <img className={"photo"} src="https://cameralabs.org/images/jamp/page/4b53fb89d1f7d16ff200999d54c80c6b_L.jpg" alt={''} />
                            </Carousel>
                            <button className={"delete_button"}>
                                <img src={urna}/>
                            </button>
                        </div>
                        <div className={"buttons_under_photo_container"}>
                            <div className={"count_photo"}>Забрать домой</div>
                            <button className={"button"}>+79818322688</button>
                        </div>
                </div>
                <AnimalInfo/>
            </div>
            <MainInfo/>
        </div>
    )
}

export default PhotoCarouselClient;