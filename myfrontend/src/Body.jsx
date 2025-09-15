function Body(){
    const detail1 = "detail1";
    return(
        <ul>
            <li>Detail</li>
            <li>{detail1}</li>
            <li>{detail1.toUpperCase()}</li>
        </ul>
    );
}

export default Body