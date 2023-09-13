function Animal({ name, type, age }) {
    return (
        <>
            <label htmlFor="animal" className="ani-list-label">
                <input type="checkbox" id="animal" />
                <li>
                    <strong>{name}</strong> <span className="mr-2">{type}</span>{" "}
                    <span className="mr-2">{age}</span>
                </li>
            </label>
        </>
    );
}

export default Animal;
