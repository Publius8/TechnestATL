const socialMediaLinks = [
  { id: 1, class: "icon-facebook", href: "https://www.facebook.com/" },
  { id: 2, class: "icon-twitter", href: "https://x.com/home?lang=ru" },
  { id: 3, class: "icon-instagram", href: "https://www.instagram.com/planla_az/?igsh=NmVzMWc1bjZ4bmly#" },
  { id: 4, class: "icon-linkedin", href: "https://www.linkedin.com/feed/" },
];

export default function Socials() {
  return (
    <>
      {socialMediaLinks.map((elm, i) => (
        <a key={i} href={elm.href} className={elm.class}></a>
      ))}
    </>
  );
}
