var jlisp = require('./jlisp');

var prog = `
(define main (lambda ([]) (
  (+ 5 2)
  (- 7 4)
  (* 7 3)
  (/ 6 3)
  (define area-circle (lambda (rad) (* 3.141592 rad rad)))
  (area-circle 10)
  ((lambda (x) (rest x)) ("a" "b" "c"))
))())
(main ([]))
`;

console.log(jlisp.jlisp.repl(prog));