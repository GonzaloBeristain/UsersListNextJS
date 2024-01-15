const getUser = async (id) => {
    const res = await fetch(`https://reqres.in/api/users/${id}`);
    const data = await res.json();
    return data.data;
};

const UserPage = async ({ params }) => {
    const user = await getUser(params.id);

    return (
        <div className="bg-slate-900 mb-2 p-4 rounded-full flex justify-between">
            <div className="pr-2">
                <h3 className="font-bold text-2xl"> {user.id}. {user.first_name} {user.last_name} </h3>
                <p className="text-slate-200"> Email: {user.email} </p>
            </div>
            <img src={user.avatar} alt="image-avatar" className="rounded-full w-20" />
        </div>
        
    )
};

export default UserPage;