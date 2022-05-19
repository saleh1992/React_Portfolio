import {useState}  from 'react'
import "./nav.css"
import {AiOutlineHome,AiOutlineUser} from "react-icons/ai"
import {BiBookBookmark,BiMessageSquareDetail} from "react-icons/bi"
import {MdOutlineDesignServices} from "react-icons/md"

const Nav = () => {
  const [active, setActive] = useState('#')
  // function activeHandler(e){
  //   const emptyArry = []
  //   const link = e.target.href
  //   emptyArry.push(link)
  //   emptyArry.forEach(e =>{
  //     console.log(e.includes("/"));
  //     console.log(e.lastIndexOf("/"));
       
  //   })
  //   console.log(emptyArry.join(""));
  //   // setActive(e.target)
  // }
  return (
    <nav>
      <a href='/#' className={active === "#" ? "active" : ""} onClick={()=> setActive("#")} title="Home"> <AiOutlineHome /></a>
      <a href='#about' className={active === "about" ? "active" : ""} onClick={()=> setActive("about")} title="About"> <AiOutlineUser /></a>
      <a href='#experiences' className={active === "experiences" ? "active" : ""} onClick={()=> setActive("experiences")} title="Experiences"> <BiBookBookmark /></a>
      <a href='#services' className={active === "services" ? "active" : ""} onClick={()=> setActive("services")} title="Services"> <MdOutlineDesignServices /></a>
      <a href='#contact' className={active === "contact" ? "active" : ""} onClick={()=> setActive("contact")} title="Contact" > <BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
