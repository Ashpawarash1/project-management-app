// import { useState } from "react";
// import NoProjectSelected from "./components/NoProjectSelected";
// import ProjectsSidebar from "./components/ProjectsSidebar";
// import { use } from "react";
// import NewProject from "./components/NewProject";
// import SelectedProject from "./components/SelectedProject";

// export default function App() {
//   const [projectState, setProjectState] = useState({
//    selectedProjectId: undefined,
//     projects : []
//   });

//   function handleSelectProject(projectId){
//     setProjectState(prevState => ({
//       ...prevState,
//       selectedProjectId: projectId
//     }));
//   }
  
//   function handleDeleteProject(){
//     setProjectState(prevState => ({
//       ...prevState,
//       selectedProjectId: undefined,
//       projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
//     }));
//   }
//   function handleStartAddProjects(){
//     setProjectState(prevState => ({
//       ...prevState,
//       selectedProjectId: null,
//     }));
//   }
  
//   function handlecancelAddProjects(){
//     setProjectState(prevState => ({
//       ...prevState,
//       selectedProjectId: undefined,
//     }));
//   }
//   function handleAddProjects(projectdata){
//     setProjectState(prevState => {
//       const NewProject = {
//         ...projectdata,
//         id: Math.random().toString(),
//       };
       
//       return{
//       ...prevState,
//       selectedProjectId: undefined,
//       projects: [...prevState.projects, NewProject]
//     };
//   });
// }

//  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

//   let content = <SelectedProject project={selectedProject} onDeleteProject={handleDeleteProject} />;

//   if (projectState.selectedProjectsId === null) {
//     content = <NewProject onAdd={handleAddProjects} onCancel={handlecancelAddProjects}/>;
//   } else if (projectState.selectedProjectsId === undefined) {
//     content = <NoProjectSelected onStartAddProjects={handleStartAddProjects}/>;
//   }

  

//   return (
//     <>
//      <main className="h-screen my-8  flex gap-8 px-8">
//       <ProjectsSidebar 
//       onStartAddProjects={handleStartAddProjects}
//       projects={projectState.projects}
//   onSelectProject={handleSelectProject}
//   selectedProjectId={projectState.selectedProjectId}
//        />
//       {content}
//       </main>
//     </>
//   );
// }

import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleSelectProject(projectId) {
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: projectId
    }));
  }

  function handleStartAddProjects() {
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: null
    }));
  }

  function handlecancelAddProjects() {
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: undefined
    }));
  }

  function handleAddProjects(projectdata) {
    setProjectState(prevState => {
      const newProject = {
        ...projectdata,
        id: Math.random().toString()
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleDeleteProject() {
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        project => project.id !== prevState.selectedProjectId
      )
    }));
  }

  const selectedProject = projectState.projects.find(
    project => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddProjects}
        onCancel={handlecancelAddProjects}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected
        onStartAddProjects={handleStartAddProjects}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8 px-8">
      <ProjectsSidebar
        onStartAddProjects={handleStartAddProjects}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}


