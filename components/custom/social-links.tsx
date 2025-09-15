import { PERSONAL_INFO } from "@/content/cv/personal-info";
import {
  Download,
  Github,
  Laptop,
  Linkedin,
  Mail,
  Newspaper,
} from "lucide-react";
import IconLinkButton from "./icon-link-button";

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
      <IconLinkButton
        link={PERSONAL_INFO.github.link}
        label="GitHub"
        Icon={Github}
        variant="col"
      />
      <IconLinkButton
        link={PERSONAL_INFO.linkedin.link}
        label="LinkedIn"
        Icon={Linkedin}
        variant="col"
      />
      <IconLinkButton
        link={PERSONAL_INFO.medium.link}
        label="Medium"
        Icon={Newspaper}
        variant="col"
      />
      <IconLinkButton
        link={PERSONAL_INFO.dev.link}
        label="Dev.to"
        Icon={Laptop}
        variant="col"
      />
      <IconLinkButton
        link={PERSONAL_INFO.email.link}
        label="Mail"
        Icon={Mail}
        variant="col"
      />
      <IconLinkButton
        link={PERSONAL_INFO.cvPdfLink}
        label="CV PDF"
        Icon={Download}
        variant="col"
      />
    </div>
  );
}
