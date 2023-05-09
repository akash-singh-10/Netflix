import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"
import { useState } from "react"

const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://joy1.videvo.net/videvo_files/video/free/video0476/large_watermarked/_import_621da8d8e3f701.40263170_preview.mp4"
    return (
    <div 
        className="listItem" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        style={{left: isHovered && index * 225 - 50 + index * 5}}
    >
        <img src="https://media.cnn.com/api/v1/images/stellar/prod/190701125354-01-netflix-the-witcher.jpg?q=w_2400,h_1350,x_0,y_0,c_fill" alt="The Witcher" />
        {isHovered && (
            <video src={trailer} autoPlay={true} loop />)}
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <Add className="icon"/>
                    <ThumbUpAltOutlined className="icon"/>
                    <ThumbDownAltOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 30 mins</span>
                    <span className="limit">+16</span>
                    <span>2019</span>
                </div>
                <div className="desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Itaque, sit tenetur eum nam esse sed eius corrupti quas 
                    earum! Odio.
                </div>
                <div className="genre">Action</div>
            </div>
            
        
    </div>
  )
}

export default ListItem
