import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo512.png'
import './BlogItem.css'
import TestArticle from './TestArticle'


function BlogItem() {
    return (
        <Fragment>
            <div className='blog-item'>
                <img src={logo} alt="Image" className='blog-item-image' />
                <div className='blog-text'>
                    <h2 >Item no: 1</h2>
                    <h4><Link>Read More</Link></h4>
                    {/* <h4>Some conteas</h4> */}
                    {/* <TestArticle/> */}
                </div>
            </div>
        </Fragment>
    )
}

export default BlogItem