import img01 from "../assets/images/construction-01.jpeg";
import img02 from "../assets/images/construction-02.jpeg";
import img03 from "../assets/images/construction-03.jpeg";
import img04 from "../assets/images/construction-04.jpeg";
import img05 from "../assets/images/construction-05.jpeg";
import img06 from "../assets/images/construction-06.jpeg";
import img07 from "../assets/images/construction-07.jpeg";
import img08 from "../assets/images/construction-08.jpeg";
import img09 from "../assets/images/construction-09.jpeg";
import img10 from "../assets/images/construction-10.jpeg";
import img11 from "../assets/images/construction-11.jpeg";
import img12 from "../assets/images/construction-12.jpeg";
import img13 from "../assets/images/construction-13.jpeg";
import img14 from "../assets/images/construction-14.jpeg";
import img15 from "../assets/images/construction-15.jpeg";
import img16 from "../assets/images/construction-16.jpeg";
import img17 from "../assets/images/construction-17.jpeg";
import img18 from "../assets/images/construction-18.jpeg";
import img19 from "../assets/images/construction-19.jpeg";
import img20 from "../assets/images/construction-20.jpeg";
import img21 from "../assets/images/construction-21.jpeg";

export const images = [
  img01, img02, img03, img04, img05, img06, img07, img08, img09, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21,
];

export const getImage = (n: number) => images[(n - 1) % images.length];
