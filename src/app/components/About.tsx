import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="about">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/images/about/ben-milner.jpg"
            alt="Ben Milner"
            className="max-w-sm rounded-lg shadow-2xl"
            width={250}
            height={250}
          />
          <div>
            <h1 className="text-5xl font-bold">Hello there! 👋</h1>
            <p className="py-6">
              My name is Ben Milner, and I am a Web Developer with a solid
              background in IT.
            </p>
            <Link
              href={"/assets/resume.pdf"}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Resume
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 4v8h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-8a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <h1></h1>
    </div>
  );
}
