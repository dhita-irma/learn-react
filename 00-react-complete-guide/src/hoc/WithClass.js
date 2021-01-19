import React from 'react';

// const withClass = (props) => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

// Another way to create HOC: 
// Purpose is to add a div with a certain CSS class 
// Instead of returning JSX, it returns a function of a functional component 
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
};

export default withClass;
