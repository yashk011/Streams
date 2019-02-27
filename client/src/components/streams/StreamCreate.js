import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {createStream} from '../../actions';
import {connect} from 'react-redux';


class StreamCreate extends React.Component {
 
    // renderInput(formProps) {
    //     console.log(formProps);
    //     return <input onChange={formProps.input.onChange} value={formProps.input.value}/>
    // }

    renderError = ({error,touched}) => {
     
        if(touched && error){
            return (<div className=" ui error message" > 
            <div className="header">
                {error}
            </div>
          </div>);
        }
    }

    renderInput = ({input ,label , meta}) => {
        const classname = `field ${meta.error && meta.touched ? 'error' : '' }`
        return (
        <div className= {classname}>
            <label>{label} </label>
            <input {...input}/>
               {this.renderError(meta)}
         </div>   )
    }

    onSubmit = (formValues) =>
    {
       this.props.createStream(formValues);
    }

    render() {
        //console.log(this.props);
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component =  {this.renderInput} label ="Enter Title" />
                <Field name="description" component =  {this.renderInput} label="Enter Description" />
                <button className="ui primary button"> Submit </button> 
            </form>
        );
    } 

}

const validate = (formValues) =>  {

    const errors= {};

    if(!formValues.title){
        errors.title= "you must have message with title "
    }
    if(!formValues.description) {
        errors.description = "you must have message with description "
    }

    return errors;

}

const formWrapped = reduxForm({
    form : 'streamCreate',
    validate : validate
})(StreamCreate);

export default connect(null,{createStream})(formWrapped);