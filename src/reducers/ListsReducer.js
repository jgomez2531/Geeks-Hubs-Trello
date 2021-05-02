const initialState = [
    {
        title: "Último episodio",
        id: 0,
        cards: [
            {
                id: 0,
                text: "Crear una tarjeta  y lista estáticas."
            },
            {
                id: 1,
                text: "Utilizar un Mix Material UI React y estilos CSS propios."
            }
        ]
    },
    {
        title: "En este episodio",
        id: 0,
        cards: [
            {
                id: 0,
                text: "Crear 1º reducer."
            },
            {
                id: 1,
                text: "Renderizar varias tarjetas a partir de una lista estática de datos."
            },
            {
                id: 2,
                text: "Agregar fuente Roboto y iconos de Material UI."
            }

        ]
    }
]

const ListsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default ListsReducer;