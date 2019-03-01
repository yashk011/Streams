import React from 'react';
import {createStream} from '../../actions';
import {connect} from 'react-redux';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
 
    // renderInput(formProps) {
    //     console.log(formProps);
    //     return <input onChange={formProps.input.onChange} value={formProps.input.value}/>
    // }

   
    onSubmit = (formValues) =>
    {
       this.props.createStream(formValues);
    }

    render() {
        //console.log(this.props);
        return (
            <div>
                <h3> Create a stream</h3>
                <StreamForm onSubmit={this.onSubmit} />    
             </div>
        );
    } 

}


export default connect(null,{createStream})(StreamCreate);