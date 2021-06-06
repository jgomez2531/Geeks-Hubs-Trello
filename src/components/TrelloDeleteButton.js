import React from "react";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import { deleteCard } from "../actions";

class TrelloDeleteButton extends React.Component {

    handleDeleteCard = () => {
        const { dispatch, cardID, listID } = this.props;
        dispatch(deleteCard(cardID, listID));

        return;
    }

    //Renderiza botón para eliminar una tarjeta
    renderDeleteButton = () => {
        const {list} = this.props;

        return (
            <div onClick={this.handleDeleteCard} >
                <Icon>delete</Icon>
            </div>
        );

    };

    render() {
        return this.renderDeleteButton();
    }

}

export default connect() (TrelloDeleteButton);