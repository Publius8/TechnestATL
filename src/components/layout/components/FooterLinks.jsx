import { Link } from "react-router-dom";

const sections = [
  {
    title: "Company",
    links: [
      { id: 1, text: "About Us", href: "/about" },
      { id: 2, text: "Tourz Reviews", href: "/blog-list-1" },
      { id: 3, text: "Contact Us", href: "/contact" },
      { id: 4, text: "Travel Guides", href: "/destinations" },
      { id: 5, text: "Data Policy", href: "/terms" },
      { id: 6, text: "Cookie Policy", href: "/terms" },
    ],
  },
  {
    title: "Support",
    links: [
      { id: 9, text: "Get in Touch", href: "/contact" },
      { id: 10, text: "Help center", href: "/help-center" },
      { id: 12, text: "How it works", href: "/about" },
    ],
  },
];

export default function FooterLinks() {
  return (
    <>
      {sections.map((elm, i) => (
        <div key={i} className="col-lg-auto col-6">
          <h4 className="text-20 fw-500">{elm.title}</h4>

          <div className="y-gap-10 mt-20">
            {elm.links.map((elm2, i2) => (
              <Link key={i2} className="d-block fw-500" to={elm2.href}>
                {elm2.text}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
