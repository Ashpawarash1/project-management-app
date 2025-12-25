import Input from "./Input.jsx";

export default function NewProject() {
    return (
        <div className="w-[35rem] mt-16">

            <menu className="flex items-center justify-end gap-4 my-4">
           <li><button className=" text-stone800 hover:text-stone-950"
           >Cancel</button></li>
           <li><button className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
           >Save</button></li>
            </menu>

            <div>
                <Input label="Project Title" />
                <Input label="Project Description" textarea />
                <Input label="Due Date" type="date" />
            </div>

        </div>
    )
}