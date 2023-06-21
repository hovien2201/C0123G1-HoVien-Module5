let courses = [
  {
    id: 1,
    title: "ReactJS Tutorial",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Angular Tutorial",
    rating: 2.5,
  },
  {
    id: 3,
    title: "VueJS Tutorial",
    rating: 3.8,
  },
  {
    id: 4,
    title: "Java Tutorial",
    rating: 4,
  },
  {
    id: 5,
    title: "JavaScript Tutorial",
    rating: 3.5,
  },
];
let filteredCourses = courses.filter((post) => post.rating >= 4);
console.log(filteredCourses);
let filteredCourses1 = courses
  .filter((cou) => cou.rating < 4)
  .map((cou) => cou.id + "-" + cou.title + "-" + cou.rating);
console.log(filteredCourses1);

let addedCourses = [
  {
    id: 6,
    title: "PHP Tutorial",
    rating: 3,
  },
  {
    id: 7,
    title: "C# Tutorial",
    rating: 2,
  },
  {
    id: 8,
    title: "Docker Tutorial",
    rating: 3.8,
  },
];
let arr = (courses, addedCourses) => [...courses, ...addedCourses];
console.log(arr(courses, addedCourses));
