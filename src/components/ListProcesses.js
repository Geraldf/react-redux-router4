import React from 'react';
import { loadProcessDefinitions  } from '../api'



class ProcessList extends React.Component {
  async componentDidMount() {
    let pr = await loadProcessDefinitions();
  }


  render() {
    return (
      <div>
        <div >
          <h3>Welcome to Process Page!</h3>

        </div>
      </div>
    );
  }
}



export default ProcessList
