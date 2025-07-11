export default function BannerProduct({title, icon}) {
    return (
        <div className="flex items-center justify-center gap-2 [font-family:'Jost',sans-serif] w-[99vw] h-[350px] text-4xl ">
            {icon}
            <p className="bg-red-900 p-2  text-white">
                {title}
            </p>
        </div>
    )
}