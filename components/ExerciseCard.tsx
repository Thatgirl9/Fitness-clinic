import { useState } from "react";
import Modal from "./Modal";
import ExerciseCalendar from "./Calendar";

interface ExerciseCardProps {
  title: string;
  thumbnail: string;
  videoUrl: string;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  title,
  thumbnail,
  videoUrl,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  const handleWatchVideoClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowVideo(true);
  };

  const completeClickHandler = () => {
    setShowModal(true);
    setModalContent(
      <div className="text-bg-primary bg-white p-4 rounded shadow-lg">
        <p className="mb-[1em]">
          Did you do the exercise while watching the video?
        </p>
        <div className="flex gap-4">
          <button onClick={handleYesClick} className="mr-2">
            Yes <span className="text-green-primary">✔</span>
          </button>
          <button onClick={handleNoClick}>
            No
            <span>❌</span>
          </button>
        </div>
      </div>
    );
  };

  const handleYesClick = () => {
    setModalContent(
      <div className="bg-transparent">
        <ExerciseCalendar exercise={title} />
      </div>
    );
  };

  const handleNoWatchClick = () => {
    setShowVideo(true);
    setShowModal(false);
  };

  const handleNoClick = () => {
    setModalContent(
      <div className="text-bg-primary bg-white p-4 rounded shadow-lg">
        <p className="mb-[1em]">Watch the video again?</p>

        <a
          href="#exercises"
          onClick={handleNoWatchClick}
          className="text-green-primary hover:underline underline-offset-2"
        >
          Watch Video
        </a>
      </div>
    );
  };

  return (
    <div className="card shadow-lg shadow-gray-900 rounded-[0.6em]">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-40 object-cover thumbnail"
      />
      <div className="p-[1em]">
        <h3 className="mt-2 font-semibold">{title}</h3>
        {showVideo && (
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl.replace("watch?v=", "embed/")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            ></iframe>
          </div>
        )}

        <div className="flex md:flex-row flex-col gap-4 justify-between items-center mt-[2em]">
          <a
            href="#exercises"
            onClick={handleWatchVideoClick}
            className="text-green-primary hover:underline underline-offset-2"
          >
            Watch Video
          </a>
          <button
            onClick={completeClickHandler}
            className="mt-2 p-2 bg-green-primary text-bg-primary font-semibold rounded-[0.4em]"
          >
            Completed
          </button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>{modalContent}</Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
