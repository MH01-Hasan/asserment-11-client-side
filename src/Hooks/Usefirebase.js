
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,
    onAuthStateChanged} from "firebase/auth";
  
  import { useEffect } from "react";
  import { useState } from "react";
  import initialize from "../Firebase/Firebaseint";
  
  initialize()
  
  const Usefirebase = () => {
    const [lodding,setLodding] = useState(true)
      const [user, setUser] =useState({});
      const auth = getAuth();
      const googleprovider = new GoogleAuthProvider();
      
      
  //1------------------- singin google  start------------------------------//
      const singingoogle = () => {
        setLodding(true);
        
        return  signInWithPopup(auth, googleprovider)
          
            .finally(()=>setLodding(false));
            
      };
  //1------------------- singingoogle  end------------------------------//
  
  
  //2---------------observe user state-chage use start----------------------------------//
      useEffect( ()=>{
         const unsubscribe = onAuthStateChanged(auth, (user) => {
              if (user) {
                  setUser(user)
              }
  
               else {
                setUser({})
              }
              setLodding(false)
            });
            return () => unsubscribe;
      },[])
  //2---------------observe user state-chage use end----------------------------------//
  
  
  //3---------------logout start----------------------------------//
      const logout = ()=>{
          signOut(auth)
          .then(() => {
            setUser({})
            })
            .finally(()=>setLodding(false));
      }
   //3---------------logout end----------------------------------//
  
  
      return{
          user,
          lodding,
          singingoogle,
          logout,
          
  
      }
  }
  
  
  export default Usefirebase ;