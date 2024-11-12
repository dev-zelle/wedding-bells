import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import c1 from "../assets/images/c1.png";
import c2 from "../assets/images/c2.png";
import c3 from "../assets/images/c3.png";
import c4 from "../assets/images/c4.png";
import c5 from "../assets/images/c5.png";
import c6 from "../assets/images/c6.png";
import c7 from "../assets/images/c7.png";
import c8 from "../assets/images/c8.png";
import t1 from "../assets/images/t1.jpg";
import t2 from "../assets/images/t2.jpg";
import b1 from "../assets/images/b1.jpg";
import b2 from "../assets/images/b2.jpg";
import a1 from "../assets/images/a1.png";

import hubert_alegro from "../assets/images/entourage/hubert_alegro.jpg";
import dyan_sicat from "../assets/images/entourage/dyan_sicat.jpeg";
import evalaine_abecia from "../assets/images/entourage/evalaine_abecia.jpeg";
import jorge_lim from "../assets/images/entourage/jorge_lim.jpg";
import kent_chan from "../assets/images/entourage/kent_chan.jpg";
import kimberly_chan from "../assets/images/entourage/kimberly_chan.jpg";
import leonardo_clapis from "../assets/images/entourage/leonardo_clapis.jpeg";
import marielle_vergara from "../assets/images/entourage/marielle_vergara.jpeg";
import patrick_tan from "../assets/images/entourage/patrick_tan.jpeg";
import lanz_clapis from "../assets/images/entourage/lanz_clapis.jpeg";

export const navItems = [
  { id: 0, title: "Home", path: "#home" },
  { id: 1, title: "Couple", path: "#couple" },
  { id: 2, title: "Entourage", path: "#entourage" },
  { id: 3, title: "Venue", path: "#venue" },
  { id: 4, title: "Dress Code", path: "#dress-code" },
  { id: 5, title: "RSVP", path: "#rsvp" },
];

export const projectCats = [
  { title: "All", active: true },
  { title: "Buildings", active: false },
  { title: "Interior & Exterior", active: false },
  { title: "Renovate", active: false },
  { title: "Industry", active: false },
  { title: "Road", active: false },
];

export const projects = [
  { title: "Jaguare garment industry", image: p1 },
  { title: "Outbox creatives building", image: p2 },
  { title: "Slova private residence", image: p3 },
];

export const features = [
	{ title: "Building New Homes", description: "Vehicula at eget a arcu neque ultricies." },
	{ title: "Designing Spaces", description: "Ultricies liquet tempus vel amet." },
	{ title: "Road Maintenance", description: "Tempus vel amet eget egestas arcu non." },
];

export const companies = [
  { id: 1, image: c1 },
  { id: 2, image: c2 },
  { id: 3, image: c3 },
  { id: 4, image: c4 },
  { id: 5, image: c5 },
  { id: 6, image: c6 },
  { id: 7, image: c7 },
  { id: 8, image: c8 },
];

export const team = [
  { name: "Kevin Carl L. Chan", role: "Groom", image: t1 },
  { name: "Lovely Liana S. Clapis", role: "Bride", image: t2 },
];

export const entourage = [
  { role: "Best Man", name: "Kent Carlo L. Chan", image: kent_chan },
  { role: "Maid of Honor", name: "Lanz Laxi Liane S. Clapis", image: lanz_clapis, },
  { role: "Bridesmaid", name: "Kimbery Rose L. Chan", image: kimberly_chan},
  { role: "Bridesmaid", name: "Dr. Marielle Anne Elouise L. Vergara", image: marielle_vergara },
  { role: "Bridesmaid", name: "Dr. Evalaine Mae A. Abecia", image: evalaine_abecia },
  { role: "Bridesmaid", name: "Dr. Dyan G. Sicat", image: dyan_sicat },
  { role: "Groomsman", name: "Jorge Frederick W. Lim",  image: jorge_lim },
  { role: "Groomsman", name: "Patrick M. Tan",  image: patrick_tan },
  { role: "Groomsman", name: "Dr. Leonardo Luigi S. Clapis",  image: leonardo_clapis },
  { role: "Groomsman", name: "Dr Hubert Jonathan Alegro",  image: hubert_alegro },
];

export const attire = [{ image: a1 }];

export const commentsArray = [
  {
    body: "“A pellen tesque pretium feugiat vel mobi sagittis lorem habi tasse cursus ipsum quis nec eget facilisis. Quis nibh ut bindum nisl quis placerat proin tortor mattis.”",
    name: "Kelly Garcia",
  },
  {
    body: "“Feugiat hac porttitor sem dictum velit, elementum odio. Sed ipsum quis nec eget facilisis. Quis nibh ut bibendum nisl quis placerat proin tortor mattis in neque.”",
    name: "Jacque Adler",
  },
  {
    body: "“Quis nibh ut bibendum nisl quis placerat proin tortor mattis in neque. Feugiat hac porttitor sem dictum velit, elementum odio sed eget facilisis.”",
    name: "Kerry Frank",
  },
];

export const results = [
  { title: "Projects done", value: 780 },
  { title: "Total members", value: 127 },
  { title: "Happy customers", value: 627 },
  { title: "Awards", value: 28 },
];

export const articles = [
  {
    date: "Juna Subdivision 8021 Davao City Davao Region",
    title: "3:30PM, San Pablo Church",
    image: b1,
    text: " Church",
		url: "https://maps.app.goo.gl/3bDKdo7rEyVtdsQH7"
  },
  {
    date: "Col. Emilio Escandor St., Davao Gulf Drive, Ecoland Dr., Talomo 8000 Davao City Davao Region",
    title: "6:00PM, Arcadia Building",
    image: b2,
    text: " Reception",
		url: "https://maps.app.goo.gl/RwkgD9QhHwuCvTf76"
  },
];
