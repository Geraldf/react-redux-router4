import React from 'react';
import { loadProcessDefinitions, loadFormKey } from '../actions';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';
import List from './List';



class ProcessList extends React.Component {
  componentWillMount() {
    this.props.loadProcessDefinitions();
  }


  mapStateToProps = (state, ownProps) => {
    const params = ownProps.match.params;
    console.log(params);
    console.log(state.entities);
    return {
      ...params,
      ...state.entities
    }
  }

  renderProcess(process) {
    return <li key={process.id}>
      <Link to={`/startProcess/key/${process.key}`}>{process.name} - Version {process.version}</Link>
    </li>
  }
  render() {
    console.log(this.props)
    const { processDefinition, processDefinitionXML } = this.props

    if (!processDefinition) {
      return (
        <div><p>Loading process definitions...</p></div>
      )
    } else {
      Object.keys(processDefinition).forEach((id) => {
        if (processDefinitionXML && processDefinitionXML[id]) {
          processDefinition[id].xml = processDefinitionXML[id].bpmn20Xml
        }
      })

      return (
        <Container text>
          <Header as='h2'>Choose process to start</Header>
          <List renderItem={this.renderProcess}
            items={processDefinition}
            loadingLabel={`Loading process definitions...`}
          />
        </Container>
      )
    }
  }
}



export default withRouter(connect(this.mapStateToProps, {
  loadProcessDefinitions,
  loadFormKey
})(ProcessList))

