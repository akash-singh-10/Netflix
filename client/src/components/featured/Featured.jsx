import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentry">Documentry</option>
                    </select>
                </div>
            )}
            <img width="100%" src="https://www.pixelstalk.net/wp-content/uploads/images6/Stranger-Things-HD-Wallpaper-Free-download.jpg" alt="" />
            <div className="info">
                <img src="https://drive.google.com/uc?export=view&id=1_BgAji1OrnzxVLq0eYtIqhpn5EYKE6y4" alt="" />
                <span className="desc">
                    When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.<br/>
                    <br/>
                    Starring: Winona Ryder,David Harbour,Millie Bobby Brown<br/>
                    Creators: The Duffer Brothers
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
} 

export default Featured