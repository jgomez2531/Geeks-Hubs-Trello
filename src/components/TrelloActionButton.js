import React from "react";
import Icon from "@material-ui/core/Icon";
import TextArea from "react-textarea-autosize";
import Card from '@material-ui/core/Card';
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { addList, addCard, deleteCard } from "../actions";

class TrelloActionButton extends React.Component {

    //Definimos los estados
    state = {
        formOpen: false
    };

    openForm = () => {
        this.setState({
            formOpen: true
        });
    }

    closeForm = (e) => {
        this.setState({
            formOpen: false
        });
    }

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        });
    };

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if (text) {

            this.setState({
                text: ""
            });

            dispatch(addList(text));
        }

        return;
    }

    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if (text) {

            this.setState({
                text: ""
            });
            
            dispatch(addCard(listID, text));
        }

        return;
    }

    handleDeleteCard = () => {
        const { dispatch, listID } = this.props;
        dispatch(deleteCard(listID));
    
        return;
    }

    //Renderiza botón para añadir una nueva lista / tarjeta
    renderAddButton = () => {
        const {list} = this.props;

        const buttonText = list ? "Añadir otra lista" : "Añadir otra tarjeta";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

        return (
            <div
                onClick={this.openForm}
                className="openFormButtonGroup"
                style={{
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground,
                }}
            >
                <Icon>add</Icon>
                <p className="buttonOpenFormAdd">{buttonText}</p>
            </div>
        );

    };

    //Renderiza el contenido que mostrará el botón [renderAddButton()] cuando se le pulse
    renderForm = () => {
        const {list} = this.props;

        const placeholder = list
            ? "Introduzca un título para la lista ..."
            : "Introduzca un título para la tarjeta...";
        
        const buttonTitle = list ? "Añadir Lista" : "Añadir Tarjeta";

        return <div>
            <Card className="cardModal">
                <TextArea 
                    placeholder={placeholder} 
                    autoFocus 
                    onBlur={this.closeForm}
                    onChange={this.handleInputChange}
                    className="textAreaModal"
                />
            </Card>
            <div className="formButtonGroup">
                <Button 
                    onMouseDown={ list ? this.handleAddList : this.handleAddCard}
                    variant="contained"
                    className="buttonModal"
                >{buttonTitle}{" "}</Button>
                <Icon className="iconModal">close</Icon>
            </div>
        </div>
    };

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }

}


export default connect() (TrelloActionButton);