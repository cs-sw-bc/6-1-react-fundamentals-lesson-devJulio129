import {UserProfile} from './UserProfile.jsx'
//Every component must return one HTML object.
//which can have several nested objects
export function ClassList() {
    return(
     <div>
     <UserProfile name="Julio" role="dad" display_pic="https://randomuser.me/api/portraits/men/12.jpg" />
      <UserProfile name="Julio" role="janitor" display_pic="https://randomuser.me/api/portraits/men/14.jpg" />
      <UserProfile name="Julio" role="worker" display_pic="https://randomuser.me/api/portraits/men/3.jpg" />
       <UserProfile name="Julio" role="dancer" display_pic="https://randomuser.me/api/portraits/men/5.jpg" />
    
     </div>
    );
}