interface HeadingProps{
    title:string;
    description:string
}

const Heading:React.FC<HeadingProps>=({
    title,description
})=>{
    return(
        <div className="ml-5">
            <h2 className="text-3xl font-bold tracking-tight mb-1  ">{title}</h2>
            <p className="text-md text-muted-foreground">
                {description}
            </p>
        </div>
    );
}
export default Heading;