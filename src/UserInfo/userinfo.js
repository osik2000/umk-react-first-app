import React from "react";

const users = [
    {
        id: 1,
    name: "John Doe",
    birthday: "1970-01-01",
    email:"johndoe@yahoo.com"},
    {
        id: 2,
    name: "Jane Doe",
    birthday: "1977-03-11",
    email:"janexx@yahoo.com"},
    {
        id: 3,
    name: "Bob Smith",
    birthday: "2000-11-12",
    email:"bobek@wp.pl"}];



const RenderUsersAsOptionsList = () => {
    const [selected, setSelected] = React.useState(0);

    const selectedUser = users.find(user => user.id==selected)
    console.log(selectedUser);
    console.log(selected);

    function handleSelect(event){
        setSelected(event.target.value);
    }

    return(
        <div>
            <select name="users" id="users" onChange={event => handleSelect(event)}>
                <option disabled selected>Select a User</option>
                {
                    users.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
            </select>

            {(selectedUser) && ([
                <h2>{selectedUser.name}</h2>,
                <p>Date of Birth: {selectedUser.birthday}</p>,
                <p>Email: {selectedUser.email}</p>
            ])}
        </div>
        );
};

export default RenderUsersAsOptionsList;