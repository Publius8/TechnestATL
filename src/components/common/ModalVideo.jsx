import ModalVideo from "react-modal-video";

export default function ModalVideoComponent({ isOpen, setIsOpen, videoId }) {
  return (
    <ModalVideo
      channel="youtube"
      isOpen={isOpen}
      videoId="dQw4w9WgXcQ"
      onClose={() => setIsOpen(false)}
    />
  );
}
