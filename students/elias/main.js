'use strict';

function main () {
  
  /* Student search feature */

  var searchInput = document.querySelector('.input-student input');
  var searchResultElement = document.querySelector('div.search-results');
  searchInput.addEventListener('keyup', handleKeyUp);

  function findStudents(search){
    /* Return students which name match the search string*/
    return students.filter(function(student){
      return student.name.toLowerCase().includes(search);
    })
  }

  function displayResults(studentsFound){
    /* Clear list content before inserting new one*/
    searchResultElement.innerHTML = '';
    
    /* Create list to display results */
    var studentsList = document.createElement('ul');

    /* For each student found, create an li and add the name of the student */
    studentsFound.forEach(function(student){
      var studentListElement = document.createElement('li');
      studentListElement.innerText = student.name;
      studentsList.appendChild(studentListElement);
    })

    /* Append li to the list */
    searchResultElement.appendChild(studentsList);
  }

  function handleKeyUp(){
    var search = searchInput.value.toLowerCase();
    var studentsFound = findStudents(search);
    displayResults(studentsFound);
  }

  /** Show-content buttons */
  var sectionProfileElement = document.querySelector('.profile');
  var sectionInterestsElement = document.querySelector('.interests');
  var sectionExperimentsElement = document.querySelector('.experiments');

  var profileButton = document.querySelector('.btn-profile');
  var interestsButton = document.querySelector('.btn-interests');
  var experimentsButton = document.querySelector('.btn-experiments');

  var hideProfile = function(event){
    event.stopPropagation();
    sectionProfileElement.classList.toggle('hidden');
    if(sectionProfileElement.classList.contains('hidden')){
      profileButton.innerText = "Show profile";
    } else {
      profileButton.innerText = "Hide profile";
    }
  }

  var hideInterests = function(event){
    event.stopPropagation();
    sectionInterestsElement.classList.toggle('hidden');
    if(sectionInterestsElement.classList.contains('hidden')){
      interestsButton.innerText = "Show interests";
    } else {
      interestsButton.innerText = "Hide interests";
    }
  }

  var hideExperiments = function(event){
    event.stopPropagation();
    sectionExperimentsElement.classList.toggle('hidden');
    if(sectionExperimentsElement.classList.contains('hidden')){
      experimentsButton.innerText = "Show Experiments";
    } else {
      experimentsButton.innerText = "Hide Experiments";
    }
  }

  profileButton.addEventListener('click', hideProfile);
  interestsButton.addEventListener('click', hideInterests);
  experimentsButton.addEventListener('click', hideExperiments);


}

window.addEventListener ('load', main);

