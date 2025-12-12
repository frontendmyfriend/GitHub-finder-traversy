import { useContext, useState } from "react";
import GithubContext from '../../context/github/GithubContext'



function UserSearch() {
  const [text, setText] = useState("");

  const {users, searchUsers} = useContext(GithubContext)

  const handleChange = (e) => setText(e.target.value)
  const handleSubmit = (e) =>{
    e.preventDefault()

    if(text ===''){
      alert('Please enter something')
    } else{
      searchUsers(text)
      setText('')
    }
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 items-center">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className=" relative flex">
              <input
                type="text"
                placeholder="Search"
                className=" w-150 flex items-center bg-gray-200 input input-lg text-black"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="flex items-center absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
      
        <button className="btn-ghost btn-large">clear</button>
      </div>
      )}
    </div>
  );
}

export default UserSearch;
