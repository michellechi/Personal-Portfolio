import React from 'react';
import { useState } from 'react'; 
import { useEffect } from 'react'; 
import { projectsData } from './Data'; 
import { projectsNav } from './Data'; 
import WorkItems from './WorkItems';


const Works = ({theme}) => {
    const [item, setItem] = useState();
    const [projects, setProjects] = useState([]); 

    useEffect(() => { setProjects(projectsData) }, [item]);

    return (
        <div>
            <div className="work__container container grid">
                {projects.map((item)=> {
                    return (
                        <WorkItems 
                            item={item} 
                            key={item.id}
                            theme={theme}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default Works