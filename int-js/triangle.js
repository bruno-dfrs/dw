export function triangle_type(a, b, c) {

    if (a+b > c && a+c > b && b+c > a)

        if (a == b && a == c) {
            return "equilateral"

        } else if (a == b || a == c || b == c) {
            return "isosceles"

        } else {
            return "scalene"
        }
    
     else {
        return "none"
     }
}