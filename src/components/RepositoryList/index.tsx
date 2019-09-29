import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Repository } from '../../store/ducks/repositories/types';
import * as RepositoryAction from '../../store/ducks/repositories/actions';
import { bindActionCreators, Dispatch} from 'redux';

// mapeia tipo das informações que vem do mapStateToProps
export interface stateProps {
  repositories: Repository[]
};
// mapeia as funções que vem atraves do  mapDispatchToProps
export interface DispatchProps {
  loadMore():void,
  // loadSucess():void,
  // loadFail():void
}
// mapeia as props que vem por exemplo através de um pai
// export interface OwnProps{

// }

type Props = stateProps & DispatchProps; // & OwnProps; 

class RepositoryList extends Component<Props>{
   render() {
    const { repositories } = this.props
    return (
      <ul>
        {repositories.map((repository: Repository) => (<li>{repository.id}</li>)) }
      </ul>
    );
  }
};

const mapStateToProps = ({repositories}: ApplicationState) => ({
  repositories
});
const mapDispatchToProps = (dispatch: Dispatch) => (
  bindActionCreators(RepositoryAction, dispatch)
)
export default connect(mapStateToProps)(RepositoryList);