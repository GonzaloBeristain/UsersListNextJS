//COMPONENTS
import Users from "@/components/Users.jsx";

const fetchUser = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data
};

const HomePage = async () => {
  const users = await fetchUser();

  return (
    <>
      <Users users={users} />
    </>
  )
};

export default HomePage;