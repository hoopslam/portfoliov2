const HomeHeader = ({themeHandler}) => {

    return (
        <div>
            Home Header
            <button onClick={()=> themeHandler("blue")}>Blue</button>
            <button onClick={() => themeHandler("red")}>Red</button>
            <button onClick={() => themeHandler("dark")}>Dark</button>
            <button onClick={() => themeHandler("orange")}>Orange</button>
        </div>
    )
}

export default HomeHeader
