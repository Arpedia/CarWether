import React from 'react';
import CarDetails from './CarDetails';


class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'top',
    }
  }

  renderTop() {
    return (
      <div>
        <CarDetails />
      </div>
    )
  }

  renderInfo() {
    return (
      <div>
        Information
      </div>
    )
  }

  render() {
    var renderList;
    if (this.state.page == 'top'){
      renderList = this.renderTop();
    }
    else if(this.state.page == 'info'){
      renderList = this.renderInfo();
    }

    return (
    <div >
      {renderList}
    </div>
    );
  }
}

export default Body;