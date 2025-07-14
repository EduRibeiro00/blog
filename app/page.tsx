import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">      
        Blog
      </Link>
      <br />
      <Link href="/cv" className="text-blue-600 hover:text-blue-800 font-medium">      
        CV
      </Link>
      <br />
      <Link href="/projects" className="text-blue-600 hover:text-blue-800 font-medium">      
        Projects
      </Link>
      <br />
      <Link href="https://www.linkedin.com/in/eduardocribeiro/" className="text-blue-600 hover:text-blue-800 font-medium">      
        Linkedin
      </Link>
      <br />
      <Link href="https://github.com/EduRibeiro00" className="text-blue-600 hover:text-blue-800 font-medium">      
        GitHub
      </Link>
    </div>
  );
}
