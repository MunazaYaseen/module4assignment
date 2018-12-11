

(function(window){
	var byeSpeaker = {};
	var speakWord = "Good Bye";
	byeSpeaker.speak = function speak(name) {
  		console.log(speakWord + " " + name);
	}

window.byeSpeaker = byeSpeaker;

})(window);


(function(window){
	var helloSpeaker = {};
	var speakWord = "Hello";
	helloSpeaker.speak = function speak(name) {
  		console.log(speakWord + " " + name);
	}

window.helloSpeaker = helloSpeaker;

})(window);


(function(){
  var names = ["munaza", "yaseen", "junaid", "Jamshaid", "minhas", "javaad", "sidra", "zeba", "javeria", "Jim"];

  //loop through all the names
  for (var indx in names) {
    //select lowercase of firt letter from name array
    var firstLetter = names[indx].charAt(0).toLowerCase(); 

    //call byeSpeaker for letters that begin with "j" else call helloSpeaker
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[indx]);
    } else {
      helloSpeaker.speak(names[indx]);
    }
  }

})();

