import Image from "next/image";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="min-h-screen flex flex-wrap justify-center items-center gap-8 mt-14 lg:mt-0 resume">
      <ul className="list bg-base-300 rounded-box shadow-md lg:w-2/5">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Previous Experience
        </li>
        <li className="list-row">
          <div>
            <div>
              Agiliant, Inc |{" "}
              <span className="font-bold">October 2022 - Present</span>
            </div>
            <div className="text-xs uppercase font-semibold opacity-60">
              L1 Service Desk Engineer
            </div>
          </div>
          <ul className="list-col-wrap text-xs list-disc ml-3">
            <li>
              Troubleshoot and assist users daily, with issues and requests in a
              timely manner.
            </li>
            <li>
              Maintained polite and friendly manner when working with users.
            </li>
            <li>Multi-task multiple tickets at one time.</li>
            <li>
              Access remote systems for User account administration and
              licensing.
            </li>
            <li>Complete tickets according to SLA requirements.</li>
          </ul>
        </li>

        <li className="list-row">
          <div>
            <div>
              Pick Up A Piece (Freelance) |{" "}
              <span className="font-bold">September 2022 - Present</span>
            </div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Full Stack Web Developer
            </div>
          </div>
          <ul className="list-col-wrap text-xs list-disc ml-3">
            <li>Built and deployed MVP using React and Tailwind CSS.</li>
            <li>Regularly upkeep and maintain the site.</li>
            <li>Deploy new features and fixes as per client's needs.</li>
          </ul>
        </li>

        <li className="list-row">
          <div>
            <div>
              Perfectly Posh |{" "}
              <span className="font-bold">September 2020 - June 2022</span>
            </div>
            <div className="text-xs uppercase font-semibold opacity-60">
              IT Professional
            </div>
          </div>
          <ul className="list-col-wrap text-xs list-disc ml-3">
            <li>Troubleshoot and manage MacBook machines for end users.</li>
            <li>
              Utilize JumpCloud and G Suite for account management and asset
              management.
            </li>
            <li>
              Download and install drivers, and software per user requirements.
            </li>
          </ul>
        </li>

        <li className="list-row">
          <div>
            <div>
              American Preparatory Academy |{" "}
              <span className="font-bold">May 2019 - September 2020</span>
            </div>
            <div className="text-xs uppercase font-semibold opacity-60">
              IT Specialist
            </div>
          </div>
          <ul className="list-col-wrap text-xs list-disc ml-3">
            <li>
              Troubleshoot and manage MacBook machines for teachers and staff.
            </li>
            <li>Utilize Jamf Pro and Mosyle for MDM.</li>
            <li>
              Setup and diagnose servers, route and terminate ethernet
              connections.
            </li>
          </ul>
        </li>
      </ul>

      <div className="flex flex-wrap justify-center w-14/16 lg:w-2/5">
        <Image
          src={"/images/resume/bootcamp-badge.png"}
          alt="Bootcamp badge"
          width={250}
          height={250}
          className="my-4"
        />
        <div className="card bg-base-300 shadow-sm">
          <figure></figure>
          <div className="card-body">
            <h2 className="card-title">Coding Bootcamp</h2>
            <p>
              Earners demonstrated a fundamental working knowledge of HTML, CSS,
              Javascript, Git, TypeScript, SQL, APIs, servers, the MERN stack
              (MongoDB, Express.js, React.js,Node.js), testing, CI/CD, and
              Python. Earners have displayed their ability to work with diverse
              teams on demanding timelines to build full functional web
              applications from start to finish. They have exhibited the skills
              necessary to learn new technologies and resolve issues
              independently. This program consists of 216contact hours.
            </p>
            <div className="card-actions justify-end">
              <Link
                href={
                  "https://www.credly.com/badges/6f985c51-2dce-41d9-b1e4-1afdd42dae2e/public_url"
                }
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Link
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
      </div>
    </div>
  );
}
