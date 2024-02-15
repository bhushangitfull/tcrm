import Menubar from "./ui/Menubar";
export default function Page(){
    return(
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <p>This is home</p>
            <Menubar/>
        </div>
    );
}