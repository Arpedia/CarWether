import React from 'react';

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
        MainPage
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

    return (<div>{renderList}</div>);
  }
}

export default Body;