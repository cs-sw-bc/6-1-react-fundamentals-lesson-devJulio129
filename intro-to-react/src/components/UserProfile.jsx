/*
Task: To create a tah that looks like
<UserProfile name="x" role="y" display_pic="abc/com/1.jpg"</UserProfile>

Custom tag - component
values - props

HTML STYLE style =  "display:flex, border-radius"
JSX style = {{}}
*/



export function UserProfile({name, role, display_pic}){
    return(
      <article style={{border:"1px solid gray", paddin:"10px", borderRadius:"5%" }}>
        <img src={display_pic}></img>
        <h3>{name}</h3>
        <h1>{role}</h1>
      </article>  
    );
}
