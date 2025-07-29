import { useState, useEffect } from 'react'; 
import { projectsData } from './Data'; 
import WorkItems from './WorkItems';

const Works = ({ theme }) => {
    const [projects, setProjects] = useState([]); 

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <div>
            <div className="work__container container grid">
                {projects.map((item) => (
                    <WorkItems 
                        item={item} 
                        key={item.id}
                        theme={theme}
                    />
                ))}
            </div>
        </div>
    );
};

export default Works;
