import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { incrementAge, setFirstname, setLastname } from './UserSlice';

export default function User() {
  const { firstname, lastname, age } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">User Info</h1>
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Age: {age}</p>

      <button
        onClick={() => dispatch(incrementAge())}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment Age
      </button>

      <div className="mt-4 space-y-2">
        <input
          type="text"
          placeholder="Firstname"
          onChange={(e) => dispatch(setFirstname(e.target.value))}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Lastname"
          onChange={(e) => dispatch(setLastname(e.target.value))}
          className="border p-2 w-full"
        />
      </div>
    </div>
  );
}
