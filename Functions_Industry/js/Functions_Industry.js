/**
 * Created by rwyatt on 10/23/14.
 */
/**
 * Created by rwyatt on 10/23/14.
 */

//Calculate how many pages someone can read
//every number represents a block of 10 minutes

calcPagesPerHour( 15, 12, 20, 11);

function calcPagesPerHour (q, y, p, f) {

    var pagesRead = q + y + p + f;

    console.log(pagesRead);
    prompt("Take break");

}
