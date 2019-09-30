import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoryAction from '../../store/ducks/repositories/actions';
import { bindActionCreators, Dispatch} from 'redux';
import Repositoryitem from '../RepositoryItem/RepositoryItem';

// mapeia tipo das informações que vem do mapStateToProps
export interface stateProps {
  repositories: Repository[]
};
// mapeia as funções que vem atraves do  mapDispatchToProps
export interface DispatchProps {
  loadRequest():void,
}
// mapeia as props que vem por exemplo através de um pai
// export interface OwnProps{

// }

type Props = stateProps & DispatchProps; // & OwnProps; 

class RepositoryList extends Component<Props>{
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }
   render() {
    const { repositories } = this.props
    return (
      <ul>
        {
          repositories.map((repository: Repository, ) => (
            <Repositoryitem key={repository.id} repository={repository}/>
          ))
        }
      </ul>
    );
  }
};

const mapStateToProps = ({repositories}: ApplicationState) => ({
  repositories: repositories.data
});

const mapDispatchToProps = (dispatch: Dispatch) => (
  bindActionCreators(RepositoryAction, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);