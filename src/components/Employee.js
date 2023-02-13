import EditEmployee from "./EditEmployee";

function Employee(props) {
    return (
        // don't change props here, change them in App.js
    <div className="m-2 py-8 px-8 max-w-sm bg-slate-100 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img 
            className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" 
            src={props.img} 
            alt="Face"/>
        <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
            <p className="text-lg text-whi font-semibold">
                {props.name}
            </p>
            <p className="text-slate-500 font-medium">
                {props.role}
            </p>
        </div>
        
        <EditEmployee />

        </div>
    </div>
    )
 }

export default Employee;