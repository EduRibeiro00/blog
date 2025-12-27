import { Github, Laptop, Linkedin, Mail, Newspaper } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full text-center my-3">
      <div className="text-muted-foreground text-xs">
        @ {new Date().getFullYear()} - Eduardo Carreira Ribeiro
      </div>
      <div className="flex align-center justify-center mt-2">
        <a
          className="px-2"
          aria-label="email"
          href="mailto:eribeiro306@gmail.com"
        >
          <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground" />
        </a>
        <a
          className="px-2"
          aria-label="github"
          href="https://github.com/EduRibeiro00"
        >
          <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
        </a>
        <a
          className="px-2"
          aria-label="linkedin"
          href="https://linkedin.com/in/eduardocribeiro"
        >
          <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" />
        </a>
        <a
          className="px-2"
          aria-label="dev"
          href="https://dev.to/eduardocribeiro"
        >
          <Laptop className="w-5 h-5 text-muted-foreground hover:text-foreground" />
        </a>
        <a
          className="px-2"
          aria-label="medium"
          href="https://eduardocribeiro.medium.com/"
        >
          <Newspaper className="w-5 h-5 text-muted-foreground hover:text-foreground" />
        </a>
      </div>
    </div>
  );
}
