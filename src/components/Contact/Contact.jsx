import './Contact.css';

const Contact = (props) => {

    let styles = {
        textDecoration: 'underline',
        color: 'blueviolet'
    };

    return(
        <div className="Contact-Card">
            <h4 style = {styles}>Name: { props.name }</h4>
            <hr />
            <h5>Mobile: { props.mobile } </h5>
            <h5>Email: { props.email }</h5>
        </div>

    )
}

export default Contact;