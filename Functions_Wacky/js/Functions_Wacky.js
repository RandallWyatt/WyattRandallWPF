/**
 * Created by rwyatt on 10/23/14.
 */


//Calculate the time on a 8 track cd
//every number represents a track length in minutes

calcTrackLength( 5, 4.9, 3.94, 6.16);

function calcTrackLength (x, s, k, a) {

    var trackLength = x + s + k + a;

    console.log(trackLength);
    prompt("CD length is 20 minutes");

}

