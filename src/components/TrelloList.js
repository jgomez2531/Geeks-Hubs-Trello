import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";

const TrelloList = ({title, cards, listID}) => {
    return(
        <Droppable droppableId={String(listID)} >
            {(provided) => (
                <div 
                    {...provided.droppableProps}
                    ref={provided.innerRef} 
                    style={styles.container}
                >
                    <h4>{title}</h4>
                    {cards.map((card, index) => (
                        <TrelloCard
                            index={index}
                            key={cards.id}
                            text={card.text}
                            id={card.id}
                            listID={listID} 
                        />
                    ))}
                    <TrelloActionButton listID={listID} />
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

const styles = {
    container: {
        background: "#dfe3e6",
        boderRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8,
        height: "100%"
    }
}

export default TrelloList;