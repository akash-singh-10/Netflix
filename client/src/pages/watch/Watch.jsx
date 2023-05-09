import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"

const Watch = () => {
    return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
        <video className="video" autoPlay progress controls src="https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp4"/>
    </div>
  )
}

export default Watch
