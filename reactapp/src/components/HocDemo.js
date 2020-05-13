import React from 'react'
import Rainbow from '../hoc/Rainbow'

const HocDemo = () => {
    return(
        <div className="container">
            <h4 className="center">High Order Component Demo</h4>
            <p>This is just a high order component demo.</p>
            <p>Try refreshing the page to change colour of this text.</p>
        </div>
    )
}

export default Rainbow(HocDemo)