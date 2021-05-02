import React from 'react';
import TrelloCard from './TrelloCard';

const TrelloList = ({title, cards}) => {
    return(
        <div style={styles.container}>
            <h4>{title}</h4>
            {cards.map(card => (
                <TrelloCard  text={card.text} />
            ))}
        </div>
    )
}

const styles = {
    container: {
        background: "#dfe3e6",
        bborderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        width: 300,
        padding: 8,
        marginRight: 8
    }
}
export default TrelloList;