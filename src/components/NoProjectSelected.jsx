import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProjects }) {
    return(

        <div className = "mt-24 text-center w-2/3">
            <img src={noProjectImage} alt="No project selected" className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-bold text-stone-500 my-4"
            >No Project Selected</h2>
            <p className="text-stone-400 mb-8"
            >Select a project to get started.</p>
            <p>
            <Button onClick={onStartAddProjects}>Create new project</Button>
            </p>
        </div>
    )

}