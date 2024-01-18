export default function ErrorPopup({ errorMessage }) {
    return (
      <>
        {errorMessage ? (
          <div className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset bg-red-700/10 text-red-700 ring-red-700/10">
            {errorMessage}
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }