import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="flex w-3/4 flex-col gap-10">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              src={"/images/projects/pick-up-a-piece.png"}
              alt="Pick up a piece landing page"
              width={1000}
              height={500}
              className="md:max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Pick Up A Piece</h1>
              <p className="py-6">
                Pick Up A Piece is a self-reliance hub of information and
                like-minded individuals dedicated to preparing for life's many
                troubles, big or small.
              </p>
              <Link
                href={"https://www.pickupapiece.com/"}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Pick Up A Piece
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                    <path d="M11 13l9 -9" />
                    <path d="M15 4h5v5" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src={"/images/projects/plex-requests.png"}
              alt="Pick up a piece landing page"
              width={1000}
              height={500}
              className="md:max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Plex Requests</h1>
              <p className="py-6">
                This was a personal project I developed to streamline the
                process of managing media requests from friends and family. It
                allows them to easily submit requests for movies, TV shows, or
                other content they would like added to our shared Plex server.
              </p>
              <div className="tooltip tooltip-bottom" data-tip="Coming Soon">
                <button className="btn btn-primary" disabled>
                  Demo
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                      <path d="M11 13l9 -9" />
                      <path d="M15 4h5v5" />
                    </svg>
                  </span>
                </button>
                {/* <Link
                  href={""}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Demo{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                      <path d="M11 13l9 -9" />
                      <path d="M15 4h5v5" />
                    </svg>
                  </span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
