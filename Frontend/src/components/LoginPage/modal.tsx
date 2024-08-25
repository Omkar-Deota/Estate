function Modal({ isVisible, onClose, children }: any) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center mt-96">
      <div className="flex items-center justify-center flex-col border-8 border-double border-pink-400 bg-white">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          <svg
            className="p-1"
            enableBackground="new 0 0 32 32"
            height="32px"
            id="Слой_1"
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g id="Cancel">
              <path
                clipRule="evenodd"
                d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16   c8.836,0,16-7.163,16-16C32,7.163,24.836,0,16,0z M16,30C8.268,30,2,23.732,2,16C2,8.268,8.268,2,16,2s14,6.268,14,14   C30,23.732,23.732,30,16,30z"
                fill="#ff0000"
                fillRule="evenodd"
              />
              <path
                clipRule="evenodd"
                d="M22.729,21.271l-5.268-5.269l5.238-5.195   c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.39-1.034-0.39-1.428,0l-5.231,5.188l-5.309-5.31c-0.394-0.396-1.034-0.396-1.428,0   c-0.394,0.395-0.394,1.037,0,1.432l5.301,5.302l-5.331,5.287c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.429,0   l5.324-5.28l5.276,5.276c0.394,0.396,1.034,0.396,1.428,0C23.123,22.308,23.123,21.667,22.729,21.271z"
                fill="#ff0000"
                fillRule="evenodd"
              />
            </g>
          </svg>
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
