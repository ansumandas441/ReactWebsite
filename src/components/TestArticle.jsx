import React, { Fragment } from 'react'
import logo from '../logo512.png'
import './BlogItem.css'
import htmlContent from './testDocument.js'



function TestArticle() {
    return (
        <div>{React.createElement('div', { dangerouslySetInnerHTML: { __html: htmlContent } })}</div>
    )
}

export default TestArticle