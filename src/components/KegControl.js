import React from 'react';
import KegList from './Keglist';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';


class KegControl extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formVisibleOnPage:false,
      masterKegList:[],
      selectedKeg: null,
      editing: false
    };
  }

  handleClick =() =>{
    if (this.state.selectedKeg != null){
      this.setState({
        formVisibleOnPage: false, 
        selectedKeg:null,
        editing: false
      });
    }else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    })
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(){

    }else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List"
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{ButtonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;