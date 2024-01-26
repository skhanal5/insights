export default function GoalsRow({goalType, goalTitle, goalDescription, progressValue}) {
    return(
        <div className="p-5 rounded-lg bg-white shadow focus:shadow-lg flex flex-row gap-3">
            <div>

            </div>
            <div className="flex flex-col">
                <span>{goalTitle}</span>
                <span>{goalDescription}</span>
            </div>
            
        </div>
    )
}