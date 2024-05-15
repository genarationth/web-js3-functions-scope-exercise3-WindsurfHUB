/* Exercise 3.2 */
const edFriend = function (name1, name2, name3) {
  console.log("Welcome", name1, name2, name3 + ".");
};

edFriend("john", "jack", "jill");

/* part2 */
const subYear = function (pyear, byear) {
  return pyear - byear;
};

console.log(subYear(2024, 1990));

/* part3 */
const edword = function (name1, age1, name2, age2, name3, age3) {
  console.log(
    "Welcome",
    name1,
    ", you are",
    age1 + ". Welcome",
    name2,
    ", you are",
    age2 + "."
  );
};

edword("john", 20, "jack", 21, "jill", 22);

/* Challenge Yourself */

/* part1 part2 part 3 */
const grading = function (point) {
  if (point >= 11) {
    console.log("perfect");
  } else if (point > -8) {
    console.log("excellent");
  } else if (point > -5) {
    console.log("passes");
  } else {
    console.log("fail");
  }
};

grading(11);
