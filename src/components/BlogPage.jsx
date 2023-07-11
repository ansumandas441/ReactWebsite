import React, { Fragment } from 'react'
import BlogItem from './BlogItem'
import TopPanel from './TopPanel'
import './BlogPage.css'
// import { Box, Stack } from "@mui/system";

const BlogPage = () => {
    // if (!videos?.length) return <Loader />;
    return (
        <Fragment>
            <TopPanel/>
            <h1>My articles</h1>
            <ul className='blog-list'>
                <li className='list-item'>
                    {/* <h1>New Item</h1> */}
                    <BlogItem/>
                </li>
            </ul>
        </Fragment>
    )
}

export default BlogPage