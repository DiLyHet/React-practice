import React from 'react';
import Info from './Info.jsx';

const infoBtn1 = 'Price is 500$. Available in 2 colors';
const infoBtn2 = 'Price is 650$. Not available';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
    };
  }

  setInfo = info => {
    this.setState({
      info,
    });
  };

  render() {
    return (
      <div className="page">
        <div className="text">
          <Info info={this.state.info} />
        </div>
        <div className="actions">
          <button className="btn" onClick={() => this.setInfo(infoBtn1)}>
            IPhone 13
          </button>
          <button className="btn" onClick={() => this.setInfo(infoBtn2)}>
            IPhone 13 Pro
          </button>
          <button className="btn" onClick={() => this.setInfo('')}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
