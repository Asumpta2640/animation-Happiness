import SingleUser from "./SingleUser";
import users from "./../users.json";

function UsersSection() {;
    console.log(users)
    return (
        <div>
            <h2>User section coming soon</h2>
            <SingleUser />
        </div>
    );
}

export default UsersSection;