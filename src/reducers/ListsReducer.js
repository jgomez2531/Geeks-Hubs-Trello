import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 5;

const initialState = [
    {
        title: "Último episodio",
        id: 'list-${0}',
        cards: [
            {
                id: 'card-${0}',
                text: "Crear una tarjeta  y lista estáticas."
            },
            {
                id: 'card-${1}',
                text: "Utilizar un Mix Material UI React y estilos CSS propios."
            }
        ]
    },
    {
        title: "En este episodio",
        id: 'list-${1}',
        cards: [
            {
                id: 'card-${2}',
                text: "Crear 1º reducer."
            },
            {
                id: 'card-${3}',
                text: "Renderizar varias tarjetas a partir de una lista estática de datos."
            },
            {
                id: 'card-${4}',
                text: "Agregar fuente Roboto y iconos de Material UI."
            }

        ]
    }
]

const ListsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:

            const newList = {
                id: 'list-${listID}',
                title: action.payload,
                cards: []
            };

            listID += 1;

            return [...state, newList];

        
        case CONSTANTS.ADD_CARD:

            const newCard = {
                id: 'card-${cardID}',
                text: action.payload.text
            };
    
            cardID += 1;

            const newState = state.map(list => {
                if(list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                }
                else {
                    return list
                }
            });

            return newState;

        default:
            return state;
    }
}

export default ListsReducer;