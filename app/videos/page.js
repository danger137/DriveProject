


export default function Videos(){




return <div>

<div
  className="flex justify-center items-center w-full h-[250px] sm:h-[300px] lg:h-[390px] bg-cover bg-center"
  style={{ backgroundImage: "url('https://aadrivingacademy.net/wp-content/uploads/2022/01/testimonials-2400-scaled.jpg')" }}
>
  {/* Dark Overlay as a full-width div */}
  <div className="w-full h-full bg-black/70 flex justify-center items-center px-4">
    <h1 className="font-semibold md:font-bold mt-28 text-2xl md:text-4xl lg:text-6xl text-white">
     COURSES/VIDEOS
    </h1>
  </div>
</div>

<div className="max-w-4xl mx-auto p-4">
      <h1 className="text-center text-xl md:text-2xl font-bold text-blue-600 mb-6">
        Must Watch At Least 5 Videos
      </h1>

      {/* Playlist */}
      <div className="relative w-full aspect-video overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/videoseries?list=PLvoTWdh6WdybDSDKplkRrPKh8TOBB4vFm"
          title="YouTube Playlist"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Individual Videos */}
      <div className="flex flex-col gap-5 mt-6">
        <div className="relative w-full aspect-video overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/u29y02M_NPo"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="relative w-full aspect-video overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/z8OSZs2fj74"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>




</div>



}

