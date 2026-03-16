import { useState } from "react"

function Image() {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="m-4 flex items-center justify-center sm:m-16">
      {!imgError ? (
        <img
          src="/profile.jpg"
          alt="Apoorva"
          className="w-24 h-24 rounded-full object-cover border-2 border-accent"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-accent/20 text-accent flex items-center justify-center text-2xl font-bold font-mono border-2 border-accent">
          A
        </div>
      )}
    </div>
  )
}

export default Image