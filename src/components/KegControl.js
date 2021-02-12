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

  render(){
   
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{ButtonText}</button>
      </React.Fragment>
    );
  }
}