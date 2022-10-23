import React from 'react';
import NewPotionForm from './NewPotionForm';
import PotionList from './PotionList';
import PotionDetail from './PotionDetail';
import EditPotionForm from './EditPotionForm';
import mainPotionList from "./MainPotionList";

class PotionControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPotionList: mainPotionList,
      selectedPotion: null,
      editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleAddingNewPotionToList = (newPotion) => {
    const newMainPotionList = this.state.mainPotionList.concat(newPotion);
    this.setState({mainPotionList: newMainPotionList,
                  formVisibleOnPage: false });
  }

  handleClick = () => {
    if (this.state.selectedPotion != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPotion: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedPotion = (id) => {
    const selectedPotion = this.state.mainPotionList.filter(potion => potion.id === id)[0];
    this.setState({selectedPotion: selectedPotion});
  }

  handleDeletingPotion = (id) => {
    const newMainPotionList = this.state.mainPotionList.filter(potion => potion.id !== id);
    this.setState({
      mainPotionList: newMainPotionList,
      selectedPotion: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingPotionInList = (potionToEdit) => {
    const editedMainPotionList = this.state.mainPotionList
      .filter(potion => potion.id !== this.state.selectedPotion.id)
      .concat(potionToEdit);
    this.setState({
        mainPotionList: editedMainPotionList,
        editing: false,
        selectedPotion: null
      });
  }

  handlePotionSub = (id) => {
    const sellPotion = this.state.mainPotionList.filter(potion => potion.id === id)[0];

    if(sellPotion.quantity > 0) {
      const sold = sellPotion.quantity - 1;
      const soldPotion = {...sellPotion, quantity: sold}
      const newMainPotionList = this.state.mainPotionList.filter(potion => potion.id !== id).concat(soldPotion)
        this.setState({
          mainPotionList: newMainPotionList,
          selectedPotion: null,
                      });
        } else {
          const newMainPotionList = this.state.mainPotionList.filter(potion => potion.id !== id);
            this.setState({
              mainPotionList: newMainPotionList,
              selectedPotion: null
            });
        }
    }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditPotionForm potion = {this.state.selectedPotion}
                                              onEditPotion = {this.handleEditingPotionInList} />
      buttonText = "Return to Potion List";
    } else if (this.state.selectedPotion != null) {
      currentlyVisibleState = <PotionDetail potion = {this.state.selectedPotion} 
                                            onClickingDelete = {this.handleDeletingPotion}
                                            onClickingEdit = {this.handleEditClick} 
                                            />
      buttonText = "Return to Potion List";
      // While our PotionDetail component only takes placeholder data, we will eventually be passing the value of selectedPotion as a prop.
    } else if (this.state.formVisibleOnPage) {
      // This conditional needs to be updated to "else if."
      currentlyVisibleState = <NewPotionForm onNewPotionCreation={this.handleAddingNewPotionToList}  />;
      buttonText = "Return to Potion List";
    } else {
      currentlyVisibleState = <PotionList potionList={this.state.mainPotionList} 
                                          onPotionSelection={this.handleChangingSelectedPotion}
                                          onClickingSubtract = {this.handlePotionSub} />;
      buttonText = "Add Potion";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default PotionControl;