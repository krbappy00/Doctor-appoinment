import { useEffect, useState } from "react";

const IsAdmin = (email) => {
    const [isAdmin,setIsAdmin]= useState(false);
    const [adminloading,setAdminLoading] = useState(true)
    useEffect(()=>{
        if (email) {
            fetch(`http://localhost:5000/api/users/admin/${email}`)
              .then((res) => res.json())
              .then((data) => {
                setIsAdmin(data.isAdmin)
                setAdminLoading(false)
              });
        }
        

    },[email])
    return [isAdmin, adminloading];
};

export default IsAdmin;