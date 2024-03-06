import logements from '../data/logements.json';

function LogementsList() {
    return (
        <ul>
            {logements.map((logement, index) => (
                <li key={logement.id}>{logement.title}</li>
            ))}
        </ul>
    )
    

}

export default LogementsList