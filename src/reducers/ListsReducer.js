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

        case CONSTANTS.DRAG_HAPPENED: {

            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId
            } = action.payload;

            const newState = [...state];

            //Mover tarjeta en la misma lista
            if (droppableIdStart === droppableIdEnd) {
                const list = state.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }

            //Mover a otra lista
            if(droppableIdStart  !== droppableIdEnd) {
                //Buscar la lista cuando el arrastre de tarjeta suceda
                const listStart = state.find(list => droppableIdStart === list.id);

                //Extraer la tarjeta arrastrada de la lista
                const card = listStart.cards.splice(droppableIndexStart, 1);

                //Buscar la lista dónde hemos arrastrado la tarjeta
                const listEnd = state.find(list=> droppableIdEnd === list.id);

                //Meter la tarjeta en la lista nueva
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }

            return newState;
        }

        default:
            return state;
    }
}

export default ListsReducer;