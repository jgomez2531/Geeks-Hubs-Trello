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
                    className="containerApp"
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

export default TrelloList;