import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

//displays edit form with edit functions(streamform)
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  }
  
  render (){
    if (!this.props.stream){
      return <div>Loading...</div>
    }

    return( 
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm  
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit} 
        />
      </div>
    )
  }
}

//access stream, user is trying to access the correct one
const mapStateToProps = (state, ownProps) => {
  return (
    { stream: state.streams[ownProps.match.params.id] }
  )
}


export default connect(
  mapStateToProps, 
  {fetchStream, editStream }
  )(StreamEdit);