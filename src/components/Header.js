import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { gptToggle } from "../utils/gptSlice";
import { SUPPOTED_LANGUAGES } from "../utils/constanse";
import { setLanguage } from "../utils/languageSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const gptShowView = useSelector((store) => store.gpt.gptState);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe onAuthStateChanged while unmounted
    return () => unSubscribe();
  }, []);

  const gptSearchHandle = () => {
    dispatch(gptToggle());
  };

  const onSelectHandle = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <div className="w-screen absolute bg-gradient-to-b from-black px-4 py-2 z-10 flex justify-between">
      <img
        alt="logo-img"
        className="w-48"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && (
        <div className="my-4">
          <img
            className="w-8 rounded-2xl mb-1 ms-6"
            alt="user-img"
            src={user.photoURL}
          />
          {gptShowView && (
            <select
              className="bg-gray-800 text-white px-2 py-1"
              onChange={onSelectHandle}
            >
              {SUPPOTED_LANGUAGES.map((lang) => {
                return (
                  <option key={lang.identyfier} value={lang.identyfier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            className="bg-blue-600 text-white py-2 px-4 mx-4"
            onClick={gptSearchHandle}
          >
            {gptShowView ? "homepage" : "Gpt Search"}
          </button>
          <button
            className="bg-red-600 text-white py-2 px-4"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
