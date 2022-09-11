function User( {name, idade, photo} ) {
    return (
    <div>
       <img src={photo} alt={name} />
       <h2>Nome: {name} </h2>
       <h2>Idade: {idade} </h2>
    </div>
 )
}

export default User;