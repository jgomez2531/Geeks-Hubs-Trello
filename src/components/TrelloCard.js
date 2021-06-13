import React from 'react';
import TrelloList from './TrelloList';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';
import TrelloDeleteButton from "./TrelloDeleteButton";

const TrelloCard = ({text, id, index, listID}) => {
    return (
        <Draggable key={String(id)} draggableId={String(id)} index={index} >
            {provided => (
                <div 
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Card className="cardContainer">
                        <CardContent>
                            <Typography gutterBottom>
                                {text}
                            </Typography>
                            <TrelloDeleteButton cardID={id} listID={listID} />
                        </CardContent>
                    </Card>
                </div>
            )}
        </Draggable>
      )
};


export default TrelloCard;