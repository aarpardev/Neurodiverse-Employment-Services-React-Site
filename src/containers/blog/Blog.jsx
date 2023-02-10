import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css';

const Blog = () => {
  return (
    <div className="neuro__blog section__padding" id="blog">
    <div className="neuro__blog-heading">
      <h1 className="gradient__text">Here's what <br /> we are blogging about:</h1>
    </div>
    <div className="neuro__blog-container">
      <div className="neuro__blog-container_groupA">
        <Article imgUrl={blog01} date="Feb 7, 2023" text="Alliance of the Giants" />
      </div>
      <div className="neuro__blog-container_groupB">
        <Article imgUrl={blog02} date="Jan 13, 2023" text="Equality Pay Gap Day Review" />
        <Article imgUrl={blog03} date="Dec 20, 2022" text="New Team Members" />
        <Article imgUrl={blog04} date="Nov 16, 2022" text="Celebrating Neurodiversity Awards 2023: Update" />
        <Article imgUrl={blog05} date="Oct 18, 2022" text="AI Is Dangersous For Disabled People At Work" />
      </div>
    </div>
  </div>
  )
}

export default Blog