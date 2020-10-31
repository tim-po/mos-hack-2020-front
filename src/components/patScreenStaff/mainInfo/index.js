import React, { useState } from 'react';
import TitledList from '../../titledList';


import './mainInfo.scss';

const MainInfo = () => {

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
        <div className={"state_container"}>
                    <TitledList state={state["сведения об отлове"]} onSave={(changedState) => {
                        let newState = Object.assign(state)
                        newState["сведения об отлове"] = changedState
                        setState({...newState})
                    }}/>
                    <TitledList state={state["сведения о новых владельцах"]} onSave={(changedState) => {
                        let newState = Object.assign(state)
                        newState["сведения о новых владельцах"] = changedState
                        setState({...newState})
                    }}/>
                    <TitledList state={state["движение животного"]} onSave={(changedState) => {
                        let newState = Object.assign(state)
                        newState["движение животного"] = changedState
                        setState({...newState})
                    }}/>
                    <TitledList state={state["ответственные за животное"]} onSave={(changedState) => {
                        let newState = Object.assign(state)
                        newState["ответственные за животное"] = changedState
                        setState({...newState})
                    }}/>
                    <TitledList state={state["сведения об обработке от экто- и эндопаразитов"]} onSave={(changedState) => {
                        let newState = Object.assign(state)
                        newState["сведения об обработке от экто- и эндопаразитов"] = changedState
                        setState({...newState})
                    }}/>
                    <TitledList state={state["сведения о вакцинации"]} onSave={(changedState) => {
                        let newState = Object.assign(state)
                        newState["сведения о вакцинации"] = changedState
                        setState({...newState})
                    }}/>
                    <TitledList state={state["сведения о состоянии здоровья"]} onSave={(changedState) => {
                        let newState = Object.assign(state)
                        newState["сведения о состоянии здоровья"] = changedState
                        setState({...newState})
                    }}/>
            </div>
    )
}

export default MainInfo;