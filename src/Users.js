import facade from "./apiFacade";
import React, { useState, useEffect } from "react";
import "./style.css";

const Users = () => {
    const [usersData, setUsersData] = useState("");

    useEffect(() => {
        facade.fetchGetallUsers().then((data) => setUsersData(data.all));
    }, []);

    const handleDeleteUser = (id) => {
        facade.fetchDeleteUser(id).then(facade.fetchGetallUsers().then((data) => setUsersData(data.all)));
    }


    return (
        <div>
            <table className="table-user">

                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>PhoneNumber</th>
                    <th>Delete user</th>
                </tr>
            </table>
            {

                usersData && usersData.map((user, i) => {
                    return (
                        <div key={i}>
                            <table className="table-user">
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.company}</td>
                                    <td>{user.jobtitle}</td>
                                    <td>{user.phone}</td>
                                    <td>{usersData && <button className="button buttonCategory buttonSort" onClick={() => handleDeleteUser(user.id)}>DELETE</button>}</td>
                                </tr>
                            </table>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Users;