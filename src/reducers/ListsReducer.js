import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 7;

const initialState = [
    {
        title: "Tecnologías",
        id: 'list-${0}',
        cards: [
            {
                id: 'card-${0}',
                text: "HTML5 / CSS3."
            },
            {
                id: 'card-${1}',
                text: "React JS"
            },
            {
                id: 'card-${2}',
                text: "Git"
            },
            {
                id: 'card-${3}',
                text: "ES6"
            },
            {
                id: 'card-${4}',
                text: "Bootstrap"
            }
            
        ]
    },
    {
        title: "En este episodio",
        id: 'list-${1}',
        cards: [
            {
                id: 'card-${5}',
                text: "Uso de FlexBox o GridLayout"
            },
            {
                id: 'card-${6}',
                text: "Uso de REDUX"
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
                id: 'card-${' + cardID + '}',
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
                const list = newState.find(list => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }

            //Mover a otra lista
            if(droppableIdStart  !== droppableIdEnd) {
                //Buscar la lista cuando el arrastre de tarjeta suceda
                const listStart = newState.find(list => droppableIdStart === list.id);

                //Extraer la tarjeta arrastrada de la lista
                const card = listStart.cards.splice(droppableIndexStart, 1);

                //Buscar la lista dónde hemos arrastrado la tarjeta
                const listEnd = newState.find(list=> droppableIdEnd === list.id);

                //Meter la tarjeta en la lista nueva
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }

            return newState;
        }

        case CONSTANTS.DEL_CARD: {

            const {
                listID,
                cardID
            } = action.payload;

            const newState = [...state];
            const listStart = newState.find(list => listID === list.id);

            listStart.cards.forEach(function(element) {
                if (element.id === cardID) {
                    const cardIndex = listStart.cards.indexOf(element);
                    listStart.cards.splice(cardIndex, 1);
                }
            });

            return newState;
        }

        default:
            return state;
    }
}

export default ListsReducer;