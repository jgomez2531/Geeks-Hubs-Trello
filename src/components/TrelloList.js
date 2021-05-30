import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from "./TrelloActionButton";

const TrelloList = ({title, cards}) => {
    return(
        <div style={styles.container}>
            <h4>{title}</h4>
            {cards.map(card => (
                <TrelloCard  key={cards.id} text={card.text} />
            ))}
            <TrelloActionButton />
        </div>
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