import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";

const VideoSection = () => {
  const videoUrl =
    "https://quomodosoft.com/html/ecoshop/assets/images/homepage-one/about/advertrisement-vedio.mp4";

  const handleExternalPlay = () => {
    window.open(videoUrl, "_blank");
  };

  return (
    <div style={{ position: "relative", height: "400px", overflow: "hidden" }}>
      <ReactPlayer
        url={videoUrl}
        playing
        loop
        muted
        width="100vw"
        height="100vh"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(1.2)",
          zIndex: -1,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 128, 0, 0.4)",
        }}
      >
        <div
          style={{
            fontSize: "3rem",
            color: "white",
            cursor: "pointer",
          }}
          onClick={handleExternalPlay}
        >
          <FaPlay className="bg-white text-green-600 rounded-full size-20 p-5" />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
