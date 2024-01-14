"use client";

const Users = ({users}) => {
    return (
        <ul>
            {users.map(user => (
            <li key={user.id} className="bg-slate-900 mb-2 p-4 rounded-md flex justify-between" onClick={() => {alert(user.id)}}>
                <div className="pr-2">
                    <h3 className="font-bold text-2xl"> {user.id}. {user.first_name} {user.last_name} </h3>
                    <p className="text-slate-200"> Email: {user.email} </p>
                </div>
                <img src={user.avatar} alt="image-avatar" className="rounded-full w-20" />
            </li>
            ))}
        </ul>
    )
}

export default Users;