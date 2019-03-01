import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import {connect} from 'react-redux';
import {fetchStream ,deleteStream} from '../../actions';
import {Link} from 'react-router-dom';
class StreamDelete extends React.Component {
    
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        return (
            <React.Fragment>
                <div className="ui button negative" onClick={() => this.props.deleteStream(this.props.match.params.id)} > Delete </div>
                <Link to="/" className="ui button "> Cancel </Link>
             </React.Fragment>   
        )
    }

    renderContent() {
        if(!this.props.stream)
        {
            return 'Are you sure you want to delete this stream';
        }
        return `Are you sure you want to delete the stream :  ${this.props.stream.title} `;
    }
    render() {
        return <div>StreamDelete

        <Modal title="Delete stream" content={this.renderContent()} actions={this.renderActions()} onDismiss ={() => history.push('/')} /> 

    </div>;
    }
    
}

const mapStateToProps = (state ,ownProps) => {
    return {
        stream : state.streams[ownProps.match.params.id]
    }
 }

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete);