export default function Breadcrumb({currentPage}) {
    return (
        <div>
            <p className="[font-family:'Jost',sans-serif] text-sm font-extralight">
                Início / 
                <span className="font-semibold"> {currentPage} </span>
            </p>
        </div>
    )
}