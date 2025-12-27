import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";
export default function NewProject({onAdd, onCancel}) {
   const modalRef = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        // optional: Add validation here
        if(enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0 || enteredDueDate.trim().length === 0){
           modalRef.current.open();
            return;
        }

        onAdd({ 
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });

    }

    return (
        <>
        <Modal ref={modalRef} buttonCaption="Close">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-8">Please fill all the fields</p>
            </Modal>
        <div className="w-[35rem] mt-16">

            <menu className="flex items-center justify-end gap-4 my-4">
           <li><button className=" text-stone800 hover:text-stone-950" onClick={onCancel}
           >Cancel</button></li>
           <li><button className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
           onClick={handleSave}
           >Save</button></li>
            </menu>

            <div>
                <Input ref={title} label="Project Title" />
                <Input ref={description} label="Project Description" textarea />
                <Input ref={dueDate} label="Due Date" type="date" />
            </div>

        </div>
        </>
    )
}