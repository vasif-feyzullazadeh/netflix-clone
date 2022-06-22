import { baseUrl } from "../constants/movie";
import {Movie} from "../typings";
import Image from "next/image"

interface Props {
  movie: Movie
}

function Thumbnail({movie}:Props) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out hover:scale-105">
      <Image
      src={`${baseUrl}${movie.backdrop_path}`}
      layout="fill"
      className="rounded-sm object-cover md:rounded"
      />
      <h3>
        {movie.original_title}
      </h3>
    </div>
  )
}

export default Thumbnail