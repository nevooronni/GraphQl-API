import React from 'react';
import { Query } from 'react-apollo';
import ggl from 'graphql-tag';
import Course from './Course';

const Courses = () => (
  <Query 
    query={gql`
    {
      allCourses {
        id
        title
        author
        description
        topic
        url
      }
    }
    `}
    >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error...</p>;

      return data.allCourses.map(({id, title, author, description, topic, url }) => {
        <Course course={currentCourse} />
      });
    }}
    </Query> 
);

export default Courses;