import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import List from '../components/List';
import PropTypes from "prop-types";
import Project from "./ProjectDetail.jsx";

function Projects({ userName }) {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.github.com/users/${userName}/repos`,
      );
      const result = await data.json();

      if (result) {
        setProjects(result);
        setLoading(false);
      }
    }

    fetchData();
  }, [userName]);

  return (
    <div className='Projects-container'>
      <h2>Projects</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <List
            items={projects.map((project) => ({
              field: project.name,
              value: (
                <RouterLink to={`/projects/${project.name}`}>
                  Open project
                </RouterLink>
              ),
            }))}
          />
        </div>
      )}
    </div>
  );
}

Projects.propTypes = {
  userName: PropTypes.string
};

export default Projects;
