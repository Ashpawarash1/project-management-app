import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import { use } from "react";
import NewProject from "./components/NewProject";

export default function App() {
  const [projectState, setProjectState] = useState({
   selectedProjectsId: undefined,
    projects : []
  });

  function handleStartAddProjects(){
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectsId: null,
    }));
  }
  
  function handleAddProjects(projectdata){
    setProjectState(prevState => {
      const NewProject = {
        ...projectdata,
        id: Math.random().toString(),
      };
       
      return{
      ...prevState,
      projects: [prevState.projects,NewProject]
    };
  });
}

  let content;

  if (projectState.selectedProjectsId === null) {
    content = <NewProject onAdd={handleAddProjects}/>;
  } else if (projectState.selectedProjectsId === undefined) {
    content = <NoProjectSelected onStartAddProjects={handleStartAddProjects}/>;
  }

  console.log(projectState.projects);

  return (
    <>
     <main className="h-screen my-8  flex gap-8 px-8">
      <ProjectsSidebar onStartAddProjects={handleStartAddProjects}/>
      {content}
      </main>
    </>
  );
}



