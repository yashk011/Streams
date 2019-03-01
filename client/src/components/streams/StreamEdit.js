import React from 'react';
import {connect} from 'react-redux';
import {fetchStream,editStream} from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit  extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formvalues) => {
       this.props.editStream(this.props.match.params.id , formvalues);
    }
    render(){
       return (<div> 
           <h3> Edit a stream </h3>
            <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream , 'title' , 'description')}>  </StreamForm>
       </div>)
    }
}

const mapStateToProps = (state ,ownProps) => {
    return {stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit);